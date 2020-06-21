// external libraries
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
// local services & data store
// local containers & components
import PrivateRoute from '../routes/private-route'
// local constants & styles
import CONSTS from '../constants'

/**
 * Returns object for using local storage methods  const mainGroup = Object.entries(CONSTS.NAVIGATION)
  console.log(mainGroup)
 * localStorage handler
 * @returns {*}
 */
export const localeStorage = () =>
  typeof Storage !== 'undefined'
    ? {
      setItem: (key, value) => localStorage.setItem(key, value),
      getItem: (key) => localeStorage.getItem(key),
      removeItem: (key) => localeStorage.removeItem(key),
      clear: () => localeStorage.clear(),
      key: (key) => localeStorage.key(key)
    }
    : () => {
        throw new Error('No web storage Support.')
      }

/**
 * Returns PrivateRoute | Route component
 * @param isPrivate
 * @param params
 * @returns {*}
 */
export const routeMaker = (isPrivate, params) =>
  isPrivate ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <PrivateRoute key={params.path} {...params} />
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route key={params.path} {...params} />
  )

/**
 * Returns geo-coordinates corrected on onscreen latitude: px, longitude: px value.
 * @param lat
 * @param lng
 * @param zoom
 * @param pixelAdjust
 * @returns {{lng: *, lat: number}}
 */
export const googleMapCoordinatesConverter = ({
  worldCoordinate: { lat, lng },
  zoom,
  pixelAdjustLat,
  pixelAdjustLng,
}) => {
  const twoToTheZoomDegree = 2 ** zoom

  const newPixelCoordinateLat = lat * twoToTheZoomDegree + pixelAdjustLat
  const newPixelCoordinateLng = lng * twoToTheZoomDegree + pixelAdjustLng

  return {
    lat: newPixelCoordinateLat / twoToTheZoomDegree,
    lng: newPixelCoordinateLng / twoToTheZoomDegree,
  }
}

/**
 * Returns state whether the mouse is hovering an element.
 * @returns {[boolean, {onMouseOut: (function(): void), onMouseOver: (function(): void)}]}
 */
export const useHover = ({ whenMouseOver, whenMouseOut } = {}) => {
  const [hovering, setHovering] = useState(false)
  const onMouseOver = () => {
    setHovering(true)
    if (whenMouseOver) whenMouseOver()
  }
  const onMouseOut = () => {
    setHovering(false)
    if (whenMouseOut) whenMouseOut()
  }
  return [hovering, { onMouseOver, onMouseOut }]
}

/**
 * Returns state whether element is focused
 * @returns {[boolean, {onBlur: (function(): void), onFocus: (function(): void)}]}
 */
export const useFocus = ({ whenFocus, whenBlur } = {}) => {
  const [focus, setFocus] = useState(false)
  const onFocus = () => {
    setFocus(true)
    if (whenFocus) whenFocus()
  }
  const onBlur = () => {
    setFocus(false)
    if (whenBlur) whenBlur()
  }
  return [focus, { onFocus, onBlur }]
}

/**
 * Returns sent value after delay time
 * @param value
 * @param delay
 * @returns {any}
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  return debouncedValue
}

/**
 * Returns boolean if ref intersecting viewport
 * @param ref
 * @param rootMargin
 * @param threshold
 * @param root
 * @returns {boolean}
 */
export const useOnScreen = (
  ref,
  root = null,
  rootMargin = '0px',
  threshold = [1.0]
) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // destructuring current ref property
  const refCurrent = ref?.current
  // declaring local state
  const [isIntersecting, setIntersecting] = useState(false)
  // at every change of [refCurrent, root, rootMargin, threshold] will rerun observer
  useEffect(() => {
    // declaring callback for observer event
    const intersectionCallback = ([entry]) => {
      // so far we got only 1 threshold
      setIntersecting(entry.isIntersecting)
      // if anything time-consuming needs to be done, use Window.requestIdleCallback(). MDN thanks for care
    }
    // declaring options as second argument for observer
    const options = {
      root, // Defaults to the browser viewport if not specified or if null.
      rootMargin, // Margin around the root.
      threshold, // Either a single number or an array of numbers which indicate at what percentage
      // of the target's visibility the observer's callback should be executed.
    }
    // creating observer instance, passing callback and props
    const observer = new IntersectionObserver(intersectionCallback, options)
    // on component rerenders could pass an null so we check if current passed
    if (refCurrent) {
      observer.observe(refCurrent)
    }
    // const ref = useRef(null);
    //
    // // ✅ IntersectionObserver is created lazily once
    // function getObserver() {
    //   if (ref.current === null) {
    //     ref.current = new IntersectionObserver(onIntersect);
    //   }
    //   return ref.current;
    // }
    // falback on unmount
    return () => {
      if (refCurrent) observer.unobserve(refCurrent)
    }
  }, [refCurrent, root, rootMargin, threshold])
  // returning link to state so we can useEffect it in component
  return isIntersecting
}

/**
 * Returns an array of threshold values
 * @param steps
 * @returns {[]|number[]}
 */
export const buildThresholdList = (steps) => {
  if (!steps) return [1.0]

  const thresholds = []
  let i = 0

  while (i <= steps) {
    const ratio = i / steps
    thresholds.push(ratio)
    i += i
  }

  thresholds.push(0)
  return thresholds
}

/**
 * Returns click outside of ref state, component methods onMouseDown, onTouchStart
 * @param ref
 * @param callback
 * @returns {[boolean, {onTouchStart: (function(*=): *), onMouseDown: (function(*=): *)}]}
 */
export const useOnClickOutside = (ref, callback) => {
  const [clickOutside, setClickOutside] = useState(false)
  const listener = (event) =>
    ref.current || !ref.current.contains(event.target)
      ? setClickOutside(true)
      : setClickOutside(false)
  const handler = (event) => listener(event) && callback(event)
  const onMouseDown = (event) => handler(event)
  const onTouchStart = (event) => handler(event)

  return [
    clickOutside,
    {
      onMouseDown,
      onTouchStart
    }
  ]
}

/**
 * Returns low-level react-dom hooks
 * @returns {{query: *, replace: *, match: *, location: *, history: *, push: *, pathname: *}}
 */
export const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(
    () => ({
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: location.replace,
      pathname: location.pathname,
      query: {
        ...location.search,
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    }),
    [params, history, location, match]
  )
}
// useRequireAuth
// useAuth

/**
 * Returns function to add and/remove event listener on mount/unmount
 * @param eventName
 * @param handler
 * @param element
 */
export const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef(null)
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])
  useEffect(() => {
    // make sure element supports addEventListener
    // on
    const isSupported = element && element.addEventListener
    if (!isSupported) return null
    // create event listener that calls handler function stored in ref
    const eventListener = (event) => savedHandler.current(event)
    // add event listener
    element.addEventListener(eventName, eventListener)
    // remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

/**
 * Returns window size width, height
 * @returns {{width: (number), height: (number)}}
 */
export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return windowSize
}

/**
 * Returns function to lock body scroll
 */

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // get original overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // re-enable scrolling when component unmount

    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}

/**
 * Returns function to apply theme css object to component
 * @param theme
 */

export const useTheme = (theme) => {
  useLayoutEffect(() => {
    // iterate through each value in theme object
    Object.entries(theme)
      .forEach((val, key) => {
        document.documentElement.style.setProperty(`--${key}`, val)
      })
  }, [theme]) // only call again if theme object reference changes
}

/**
 * Returns text match to regexp
 * @param regExp
 * @param text
 * @returns {boolean|*}
 */
export const validateText = ({ regExp, text }) => {
  const test = regExp.test(text)
  const match = text.match(regExp)
  return !test || (match && !match.length)
}

/**
 * Returns validated color value || default color value
 * @param color
 * @returns {*}
 */
export const validateColorName = (color) =>
  CONSTS.COMPONENTS.BUTTONS.COLORS.VALUES.includes(color)
    ? color
    : CONSTS.COMPONENTS.BUTTONS.COLORS.DEFAULT

/**
 * Returns string||number for limited value, ex: x10 || x10+
 * @param val
 * @param limit
 * @returns {{exceeded: boolean, value: (string)}}
 */
export const quantityHandler = ({ val, limit }) => {
  /**
   * This is where something like typescript needed.
   */
  const validValue = Number.isInteger(val) ? Math.sqrt(val ** 2) : null
  const validLimit = Number.isInteger(limit) ? Math.sqrt(limit ** 2) : null
  const overLimit = `${validLimit}+`
  const isGreater = validValue > validLimit
  return { exceeded: isGreater, value: isGreater ? overLimit : validValue }
}

/**
 * Returns random string 10 characters of length
 * @returns {string}
 */
export const randomString = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z\d]+/g, '')
    .substr(0, 10)

/**
 * Returns arr range by id and length
 * @param arr
 * @param id
 * @param length
 * @returns {{data: *, nextIndex: *}}
 */
export const findByRange = (arr, id, length) => {
  // find index of given el id, considered to get an element id, not the index in array
  const indexStart = arr.findIndex((el) => el.id === id)
  const indexEnd = indexStart + length
  const nextIndex = indexStart < 0 ? id : indexEnd
  return { data: arr.slice(indexStart, indexEnd), nextIndex }
}

/**
 * Returns promise with modified data
 * @param promise
 * @param id
 * @param length
 * @param filters
 * @returns {*}
 */
export const fetchHotelsRestApiMock = (promise, { id, length }) => {
  return promise
    .then(({ data }) => {
      return new Promise((res) => {
        res(findByRange(data, id, length))
      })
    })
    .catch((e) => e)
}

/**
 * Simple delay function
 * @param ms
 * @returns {Promise<any>}
 */
export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

/**
 * Returns previous state value
 * @param value
 * @returns {any}
 */
export const usePrevious = (value) => {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// function MeasureExample() {
//   const [rect, ref] = useClientRect();
//   return (
//     <>
//       <h1 ref={ref}>Hello, world</h1>
//       {rect !== null &&
//       <h2>The above header is {Math.round(rect.height)}px tall</h2>
//       }
//     </>
//   );
// }

export const useClientRect = () => {
  const [rect, setRect] = useState(null)
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}
