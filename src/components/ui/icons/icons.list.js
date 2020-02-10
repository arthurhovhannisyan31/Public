import React from "react"

/**
 * Default size 24*24
 * @param colorMain
 * @param colorSecondary
 * @param opacity
 * @returns {({svg: *, label: string}|{svg: *, label: string}|{svg: *, label: string}|{svg: *, label: string}|{svg: *, label: string})[]}
 */

const icons = ({colorMain, colorSecondary, opacityMain, opacitySecondary}) => [
  { label: 'placeholder',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24 24H0V0H24V24Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'filter-funnel-active',
    svg: <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill={colorMain} opacity={opacityMain} d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" />
    </svg>
  },
  { label: 'filter-funnel-inactive',
    svg: <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill={colorMain} opacity={opacityMain} d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z" />
    </svg>
  },
  { label: 'radiobutton-active',
    svg: <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#F8F8F7" stroke={colorMain} opacity={opacityMain}/>
      <rect x="8" y="8" width="12" height="12" rx="6" fill={colorSecondary} opacity={opacitySecondary}/>
    </svg>
  },
  { label: 'radiobutton-inactive',
    svg: <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#F8F8F7" stroke={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'checkbox-active',
    svg: <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="2.5"  stroke={colorMain} opacity={opacityMain}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.3132 20.3163L21.4951 9.81629L20.7989 9.09839L11.3132 18.8806L7.48399 14.9317L6.78784 15.6496L11.3131 20.3163L11.3132 20.3162L11.3132 20.3163Z" fill={colorSecondary} opacity={opacitySecondary}/>
    </svg>
  },
  { label: 'checkbox-inactive',
    svg: <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="2.5" stroke={colorMain} opacity={opacityMain}/>
    </svg>
  },








  { label: 'directions',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7099 11.2901L12.7099 2.29006C12.3199 1.90006 11.6899 1.90006 11.2999 2.29006L2.29995 11.2901C1.90995 11.6801 1.90995 12.3101 2.29995 12.7001L11.2999 21.7001C11.6899 22.0901 12.3199 22.0901 12.7099 21.7001L21.7099 12.7001C22.0999 12.3201 22.0999 11.6901 21.7099 11.2901ZM13.9999 14.5001V12.0001H9.99995V15.0001H7.99995V11.0001C7.99995 10.4501 8.44995 10.0001 8.99995 10.0001H13.9999V7.50006L17.4999 11.0001L13.9999 14.5001Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'create',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'phone',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'person',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'email',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'location',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'visibility',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'visibility-off',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'date',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'date-today',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 19H17V13H11V19ZM13 15H15V17H13V15ZM19 5H18V3H16V5H8V3H6V5H5C3.895 5 3.01 5.896 3.01 7L3 21C3 22.105 3.895 23 5 23H19C20.104 23 21 22.105 21 21V7C21 5.896 20.104 5 19 5ZM5 10H19V21H5V10Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'clear',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" fill={colorSecondary} opacity={opacitySecondary}/>
      <circle cx="12" cy="12" r="12" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'cancel',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'star',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'check',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.9999 16.2L4.7999 12L3.3999 13.4L8.9999 19L20.9999 6.99998L19.5999 5.59998L8.9999 16.2Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'arrow-forward',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'arrow-drop-up',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14L12 9L17 14H7Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'arrow-drop-down',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 10L12 15L17 10H7Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'back',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 11H7.8L13.4 5.4L12 4L4 12L12 20L13.4 18.6L7.8 13H20V11Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'apps',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'add',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'favorite',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 8C11.33 6.268 9.453 5 7.5 5C4.957 5 3 6.932 3 9.5C3 13.029 6.793 15.758 12 21C17.207 15.758 21 13.029 21 9.5C21 6.932 19.043 5 16.5 5C14.545 5 12.67 6.268 12 8Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'refresh',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C15.7 20 18.8 17.4 20 14H18C16.8 16.3 14.6 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6C13.7 6 15.1 6.7 16 8L13 11H20V4L18 6C16.2 5 14.2 4 12 4Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'more',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'more-24',
    svg: <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'menu',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'close',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'chevron-right',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.6001 7.4L10.0001 6L16.0001 12L10.0001 18L8.6001 16.6L13.2001 12L8.6001 7.4Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'chevron-left',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'fullscreen-exit',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'fullscreen',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'expand-less',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 8L6 14L7.4 15.4L12 10.8L16.6 15.4L18 14L12 8Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'expand-more',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.59998L12 13.2L7.4 8.59998L6 9.99998L12 16L18 9.99998L16.6 8.59998Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'pause-outline',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'play',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5V19L19 12L8 5Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },{ label: 'share',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'bookmark',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'mic',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.99 11L14.999 5C14.999 3.342 13.657 2 12 2C10.344 2 9 3.342 9 5V11C9 12.656 10.344 14 12 14C13.657 14 14.99 12.656 14.99 11ZM17.299 11C17.299 14 14.762 16.1 12 16.1C9.239 16.1 6.7 14 6.7 11H5C5 14.415 7.719 17.233 11 17.718V21H13V17.718C16.279 17.233 19 14.415 19 11H17.299Z" fill={colorMain} opacity={opacityMain}/>
    </svg>

  },
  { label: 'search',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-overview',
    svg: <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-tickets',
    svg: <svg width="24" height="24" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.55556 3.33334H12.4444V8.66667H3.55556V3.33334ZM14.6667 6C14.6667 6.73639 15.2636 7.33334 16 7.33334V10C16 10.7364 15.4031 11.3333 14.6667 11.3333H1.33333C0.596944 11.3333 0 10.7364 0 10V7.33334C0.736389 7.33334 1.33333 6.73639 1.33333 6C1.33333 5.26362 0.736389 4.66667 0 4.66667V2.00001C0 1.26362 0.596944 0.666672 1.33333 0.666672H14.6667C15.4031 0.666672 16 1.26362 16 2.00001V4.66667C15.2636 4.66667 14.6667 5.26362 14.6667 6ZM13.3333 3.11112C13.3333 2.74292 13.0349 2.44445 12.6667 2.44445H3.33333C2.96514 2.44445 2.66667 2.74292 2.66667 3.11112V8.88889C2.66667 9.25709 2.96514 9.55556 3.33333 9.55556H12.6667C13.0349 9.55556 13.3333 9.25709 13.3333 8.88889V3.11112Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-ideas',
    svg: <svg width="24" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.50187 14.1984C3.50219 14.395 3.56031 14.5875 3.66937 14.7512L4.20344 15.5541C4.29467 15.6913 4.41841 15.8039 4.56366 15.8817C4.7089 15.9596 4.87114 16.0003 5.03594 16.0003H6.96438C7.12917 16.0003 7.29141 15.9596 7.43665 15.8817C7.5819 15.8039 7.70564 15.6913 7.79688 15.5541L8.33094 14.7512C8.43995 14.5875 8.49822 14.3952 8.49844 14.1984L8.49969 13H3.50031L3.50187 14.1984ZM0.5 5.5C0.5 6.88656 1.01406 8.15156 1.86125 9.11812C2.3775 9.70718 3.185 10.9378 3.49281 11.9759C3.49406 11.9841 3.495 11.9922 3.49625 12.0003H8.50375C8.505 11.9922 8.50594 11.9844 8.50719 11.9759C8.815 10.9378 9.6225 9.70718 10.1388 9.11812C10.9859 8.15156 11.5 6.88656 11.5 5.5C11.5 2.45656 9.02844 -0.00937887 5.98281 -3.87451e-06C2.795 0.00968363 0.5 2.59281 0.5 5.5ZM6 3C4.62156 3 3.5 4.12156 3.5 5.5C3.5 5.77625 3.27625 6 3 6C2.72375 6 2.5 5.77625 2.5 5.5C2.5 3.57 4.07 2 6 2C6.27625 2 6.5 2.22375 6.5 2.5C6.5 2.77625 6.27625 3 6 3Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-contacts',
    svg: <svg width="24" height="24" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.4 5.2C3.2825 5.2 4 4.4825 4 3.6C4 2.7175 3.2825 2 2.4 2C1.5175 2 0.8 2.7175 0.8 3.6C0.8 4.4825 1.5175 5.2 2.4 5.2ZM13.6 5.2C14.4825 5.2 15.2 4.4825 15.2 3.6C15.2 2.7175 14.4825 2 13.6 2C12.7175 2 12 2.7175 12 3.6C12 4.4825 12.7175 5.2 13.6 5.2ZM14.4 6H12.8C12.36 6 11.9625 6.1775 11.6725 6.465C12.68 7.0175 13.395 8.015 13.55 9.2H15.2C15.6425 9.2 16 8.8425 16 8.4V7.6C16 6.7175 15.2825 6 14.4 6ZM8 6C9.5475 6 10.8 4.7475 10.8 3.2C10.8 1.6525 9.5475 0.400002 8 0.400002C6.4525 0.400002 5.2 1.6525 5.2 3.2C5.2 4.7475 6.4525 6 8 6ZM9.92 6.8H9.7125C9.1925 7.05 8.615 7.2 8 7.2C7.385 7.2 6.81 7.05 6.2875 6.8H6.08C4.49 6.8 3.2 8.09 3.2 9.68V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.68C12.8 8.09 11.51 6.8 9.92 6.8ZM4.3275 6.465C4.0375 6.1775 3.64 6 3.2 6H1.6C0.7175 6 0 6.7175 0 7.6V8.4C0 8.8425 0.3575 9.2 0.8 9.2H2.4475C2.605 8.015 3.32 7.0175 4.3275 6.465Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-agents',
    svg: <svg width="24" height="24" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8C9.20937 8 11 6.20937 11 4C11 1.79063 9.20937 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875V9.01875Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-articles',
    svg: <svg width="24" height="24" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 11.25V0.75C14 0.334375 13.6656 0 13.25 0H3C1.34375 0 0 1.34375 0 3V13C0 14.6562 1.34375 16 3 16H13.25C13.6656 16 14 15.6656 14 15.25V14.75C14 14.5156 13.8906 14.3031 13.7219 14.1656C13.5906 13.6844 13.5906 12.3125 13.7219 11.8313C13.8906 11.6969 14 11.4844 14 11.25ZM4 4.1875C4 4.08437 4.08437 4 4.1875 4H10.8125C10.9156 4 11 4.08437 11 4.1875V4.8125C11 4.91563 10.9156 5 10.8125 5H4.1875C4.08437 5 4 4.91563 4 4.8125V4.1875ZM4 6.1875C4 6.08437 4.08437 6 4.1875 6H10.8125C10.9156 6 11 6.08437 11 6.1875V6.8125C11 6.91563 10.9156 7 10.8125 7H4.1875C4.08437 7 4 6.91563 4 6.8125V6.1875ZM11.9187 14H3C2.44688 14 2 13.5531 2 13C2 12.45 2.45 12 3 12H11.9187C11.8594 12.5344 11.8594 13.4656 11.9187 14Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-settings',
    svg: <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2313 9.86557L13.9 9.09682C14.0344 8.37182 14.0344 7.62807 13.9 6.90307L15.2313 6.13432C15.3844 6.04682 15.4531 5.86557 15.4031 5.69682C15.0563 4.58432 14.4656 3.57807 13.6938 2.74057C13.575 2.61244 13.3813 2.58119 13.2313 2.66869L11.9 3.43744C11.3406 2.95619 10.6969 2.58432 10 2.34057V0.806191C10 0.631191 9.87814 0.478066 9.70627 0.440566C8.55939 0.184316 7.38439 0.196816 6.29377 0.440566C6.12189 0.478066 6.00002 0.631191 6.00002 0.806191V2.34369C5.30627 2.59057 4.66252 2.96244 4.10002 3.44057L2.77189 2.67182C2.61877 2.58432 2.42814 2.61244 2.30939 2.74369C1.53752 3.57807 0.946895 4.58432 0.60002 5.69994C0.546895 5.86869 0.61877 6.04994 0.771895 6.13744L2.10314 6.90619C1.96877 7.63119 1.96877 8.37494 2.10314 9.09994L0.771895 9.86869C0.61877 9.95619 0.55002 10.1374 0.60002 10.3062C0.946895 11.4187 1.53752 12.4249 2.30939 13.2624C2.42814 13.3906 2.62189 13.4218 2.77189 13.3343L4.10314 12.5656C4.66252 13.0468 5.30627 13.4187 6.00314 13.6624V15.1999C6.00314 15.3749 6.12502 15.5281 6.29689 15.5656C7.44377 15.8218 8.61877 15.8093 9.70939 15.5656C9.88127 15.5281 10.0031 15.3749 10.0031 15.1999V13.6624C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3343C13.3875 13.4218 13.5781 13.3937 13.6969 13.2624C14.4688 12.4281 15.0594 11.4218 15.4063 10.3062C15.4531 10.1343 15.3844 9.95307 15.2313 9.86557ZM8.00002 10.4999C6.62189 10.4999 5.50002 9.37807 5.50002 7.99994C5.50002 6.62182 6.62189 5.49994 8.00002 5.49994C9.37814 5.49994 10.5 6.62182 10.5 7.99994C10.5 9.37807 9.37814 10.4999 8.00002 10.4999Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-subscription',
    svg: <svg width="24" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.035 11.3322C2.76344 11.0606 2.905 11.1372 2.25 10.9619C1.95281 10.8822 1.69156 10.7291 1.45531 10.5456L0.0375007 14.0219C-0.0996868 14.3584 0.156563 14.7241 0.519688 14.7103L2.16625 14.6475L3.29875 15.8437C3.54875 16.1075 3.9875 16.0253 4.12469 15.6887L5.75125 11.7006C5.4125 11.8894 5.03656 12 4.64781 12C4.03844 12 3.46594 11.7628 3.035 11.3322ZM11.9625 14.0219L10.5447 10.5456C10.3084 10.7294 10.0472 10.8822 9.75 10.9619C9.09156 11.1381 9.23594 11.0612 8.965 11.3322C8.53406 11.7628 7.96125 12 7.35188 12C6.96313 12 6.58719 11.8891 6.24844 11.7006L7.875 15.6887C8.01219 16.0253 8.45125 16.1075 8.70094 15.8437L9.83375 14.6475L11.4803 14.7103C11.8434 14.7241 12.0997 14.3581 11.9625 14.0219ZM8.21875 10.625C8.69625 10.1391 8.75094 10.1809 9.43094 9.99562C9.865 9.87718 10.2044 9.53187 10.3206 9.08999C10.5544 8.20249 10.4938 8.30968 11.1316 7.66031C11.4494 7.33687 11.5734 6.8653 11.4572 6.42343C11.2238 5.53655 11.2234 5.66031 11.4572 4.77249C11.5734 4.33062 11.4494 3.85906 11.1316 3.53562C10.4938 2.88624 10.5544 2.99312 10.3206 2.10593C10.2044 1.66406 9.865 1.31874 9.43094 1.20031C8.55969 0.962493 8.66469 1.02468 8.02625 0.374993C7.70844 0.0515551 7.245 -0.0750074 6.81094 0.0434301C5.94 0.28093 6.06156 0.281243 5.18906 0.0434301C4.755 -0.0750074 4.29156 0.0512426 3.97375 0.374993C3.33594 1.02437 3.44094 0.962493 2.56938 1.20031C2.13531 1.31874 1.79594 1.66406 1.67969 2.10593C1.44625 2.99312 1.50656 2.88624 0.868751 3.53562C0.550938 3.85906 0.426563 4.33062 0.543126 4.77249C0.776563 5.65874 0.776876 5.53499 0.543126 6.42312C0.426876 6.86499 0.550938 7.33656 0.868751 7.66031C1.50656 8.30968 1.44594 8.20249 1.67969 9.08999C1.79594 9.53187 2.13531 9.87718 2.56938 9.99562C3.26875 10.1862 3.32094 10.1562 3.78125 10.625C4.19469 11.0459 4.83875 11.1212 5.33563 10.8069C5.53432 10.6807 5.76481 10.6137 6.00016 10.6137C6.23551 10.6137 6.466 10.6807 6.66469 10.8069C7.16125 11.1212 7.80531 11.0459 8.21875 10.625ZM3.05188 5.49874C3.05188 3.84156 4.37188 2.49812 6 2.49812C7.62813 2.49812 8.94813 3.84156 8.94813 5.49874C8.94813 7.15593 7.62813 8.49937 6 8.49937C4.37188 8.49937 3.05188 7.15593 3.05188 5.49874Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-dashboard',
    svg: <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-messages',
    svg: <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-tasks',
    svg: <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM11 16H4V14H11V16ZM14 12H4V10H14V12ZM14 8H4V6H14V8Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-clients',
    svg: <svg width="24" height="24" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'nav-notifications',
    svg: <svg width="24" height="24" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: 'notification-new',
    svg: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99999 19C9.10374 19 9.99905 18.1047 9.99905 17H6.00093C6.00093 18.1047 6.89624 19 7.99999 19ZM14.7309 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.99937 4.65125V4C8.99937 3.44781 8.55187 3 7.99999 3C7.44812 3 7.00062 3.44781 7.00062 4V4.65125C4.70499 5.12812 3.00249 7.07188 3.00249 9.5C3.00249 12.6969 1.8728 13.6728 1.26905 14.3216C1.08155 14.5231 0.998429 14.7641 0.999991 15C1.00343 15.5125 1.40562 16 2.00312 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9184 14.5228 14.7309 14.3216Z" fill={colorMain} opacity={opacityMain}/>
      <circle cx="13" cy="5" r="3.75" fill={colorSecondary} opacity={opacitySecondary} stroke="#F7F8FC" strokeWidth="1.5"/>
    </svg>
  },
  { label: 'sort',
    svg: <svg width="24" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z" fill={colorMain} opacity={opacityMain}/>
    </svg>
  },
  { label: '',
    svg: null
  },
  { label: '',
    svg: null
  },
  { label: '',
    svg: null
  },
  { label: '',
    svg: null
  },
  { label: '',
    svg: null
  },
  { label: '',
    svg: null
  },
]

export default icons
