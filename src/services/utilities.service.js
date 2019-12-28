// external libraries
import React, { useState, useEffect } from 'react'
import {Route} from "react-router-dom"
// local services & data store
// local containers
// local components
import PrivateRoute from "../routes/private-route"
// local constants
// local styles

/**
 * Returns object for using local storage methods
 * localStorage handler
 * @returns {*}
 */
export const localeStorage = () => typeof(Storage) !== 'undefined'
  ? {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: (key) => localeStorage.getItem(key),
    removeItem: (key) => localeStorage.removeItem(key),
    clear: () => localeStorage.clear(),
    key: (key) => localeStorage.key(key)
  }
  : () => {throw new Error('No web storage Support.')}


/**
 * Returns PrivateRoute | Route component
 * @param isPrivate
 * @param params
 * @returns {*}
 */
export const routeMaker = (isPrivate, params) => (
  isPrivate
    ? <PrivateRoute key={params.path} {...params}/>
    : <Route key={params.path} {...params}/>
)

/**
 * Returns geo-coordinates corrected on onscreen latitude: px, longitude: px value.
 * @param lat
 * @param lng
 * @param zoom
 * @param pixelAdjust
 * @returns {{lng: *, lat: number}}
 */
export const googleMapCoordinatesConverter = (
  { worldCoordinate: { lat, lng },
    zoom,
    pixelAdjustLat,
    pixelAdjustLng
  }) => {
  const twoToTheZoomDegree = 2**zoom

  const newPixelCoordinateLat = lat * twoToTheZoomDegree + pixelAdjustLat;
  const newPixelCoordinateLng = lng * twoToTheZoomDegree + pixelAdjustLng;

  return {
    lat: newPixelCoordinateLat / twoToTheZoomDegree,
    lng: newPixelCoordinateLng / twoToTheZoomDegree
  };
};

/**
 * Returns boolean whether the mouse is hovering an element.
 * @returns {[boolean, {onMouseOut: (function(): void), onMouseOver: (function(): void)}]}
 */
export const useHover = () => {
  const [hovering, setHovering] = useState(false)
  const onMouseOver = () => setHovering(true)
  const onMouseOut = () => setHovering(false)
  return [hovering, {
    onMouseOut,
    onMouseOver
  }]
}

/**
 * Returns window size width, height
 * @returns {{width: (number), height: (number)}}
 */
export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
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
 * Returns sent value after delay time
 * @param value
 * @param delay
 * @returns {unknown}
 */
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(debounceValue), delay)
    return () => clearTimeout(handler)
  }, [debounceValue, delay])
  return debounceValue
}

/**
 * Returns boolean if ref intersecting viewport
 * @param ref
 * @param rootMargin
 * @param threshold
 * @param root
 * @returns {boolean}
 */
export const useOnScreen = (ref, root = null, rootMargin = '0px', threshold = [1.0]) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const intersectionCallback = ([entry]) => {
      setIntersecting(entry.isIntersecting)
      // if anything time-consuming needs to be done, use Window.requestIdleCallback().
    }
    const options = {
      root,
      rootMargin,
      threshold
    }
    const observer = new IntersectionObserver( intersectionCallback, options)
    if (ref.current) observer.observe(ref.current)
    return () => observer.unobserve(ref.current)
  }, [])
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
  let i = 0;

  while (i <= steps) {
    const ratio = i /steps
    thresholds.push(ratio)
    i+=i
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
  const listener = event => (ref.current || !ref.current.contains(event.target))
    ? setClickOutside(true)
    : setClickOutside(false)
  const handler = event => listener(event) && callback(event)
  const onMouseDown = event => handler(event)
  const onTouchStart = event => handler(event)

  return [clickOutside, {
    onMouseDown,
    onTouchStart
  }]
}
