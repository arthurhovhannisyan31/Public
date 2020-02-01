import React from "react"

export const CONSTS = {
  DOM: {
    ROOT: 'root',
  },
  REDIRECT_TIMEOUT: 10,
  BASE_URL: 'https://',
  ROUTES: {
    LOGIN: '/login',
    WELCOME: ['/', '/index.html'],
    WEATHER: '/weather',
    TRAVEL: '/travel',
    NEWS: '/news',
    NOT_FOUND: ['*', '/not-found']
  },
  REGEXP: {
    // eslint-disable-next-line no-useless-escape
    ruRegExp: /[^а-яёА-ЯЁ\s\d`~!@№;,.#$%^&*()_+{}|:"<>?[\]'\\\/]/g,
    // eslint-disable-next-line no-useless-escape
    enRegExp: /[^a-zA-Z\s\d`~!@№;,.#$%^&*()_+{}|:"<>?[\]'\\\/]/g
  },
  COMPONENTS: {
    BUTTONS: {
      COLORS: {
        VALUES: ['main', 'secondary'],
        DEFAULT: 'main'
      },
      LABELS: {
        TEST: {
          VALUE: 'test'
        }
      }

    }
  }
}

export const iconsMaterial = ({fill, fillOpacity}) => [
  { label: 'placeholder',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24 24H0V0H24V24Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>
  },
  { label: 'directions',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7099 11.2901L12.7099 2.29006C12.3199 1.90006 11.6899 1.90006 11.2999 2.29006L2.29995 11.2901C1.90995 11.6801 1.90995 12.3101 2.29995 12.7001L11.2999 21.7001C11.6899 22.0901 12.3199 22.0901 12.7099 21.7001L21.7099 12.7001C22.0999 12.3201 22.0999 11.6901 21.7099 11.2901ZM13.9999 14.5001V12.0001H9.99995V15.0001H7.99995V11.0001C7.99995 10.4501 8.44995 10.0001 8.99995 10.0001H13.9999V7.50006L17.4999 11.0001L13.9999 14.5001Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'create',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'phone',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'person',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'email',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'location',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'visibility',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'visibility-off',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>
  },
  { label: 'date',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'clear',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={fill} fillOpacity={fillOpacity}/>
      <path d="M16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'cancel',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'star',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'check',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.9999 16.2L4.7999 12L3.3999 13.4L8.9999 19L20.9999 6.99998L19.5999 5.59998L8.9999 16.2Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'arrow-forward',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'arrow-drop-up',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14L12 9L17 14H7Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'arrow-drop-down',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 10L12 15L17 10H7Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'back',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 11H7.8L13.4 5.4L12 4L4 12L12 20L13.4 18.6L7.8 13H20V11Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'apps',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'add',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>
  },
  { label: 'favorite',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 8C11.33 6.268 9.453 5 7.5 5C4.957 5 3 6.932 3 9.5C3 13.029 6.793 15.758 12 21C17.207 15.758 21 13.029 21 9.5C21 6.932 19.043 5 16.5 5C14.545 5 12.67 6.268 12 8Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'refresh',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C15.7 20 18.8 17.4 20 14H18C16.8 16.3 14.6 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6C13.7 6 15.1 6.7 16 8L13 11H20V4L18 6C16.2 5 14.2 4 12 4Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'more',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'more-24',
    svg: <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'menu',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>
  },
  { label: 'close',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'chevron-right',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.6001 7.4L10.0001 6L16.0001 12L10.0001 18L8.6001 16.6L13.2001 12L8.6001 7.4Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'chevron-left',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'fullscreen-exit',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'fullscreen',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'expand-less',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 8L6 14L7.4 15.4L12 10.8L16.6 15.4L18 14L12 8Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'expand-more',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.59998L12 13.2L7.4 8.59998L6 9.99998L12 16L18 9.99998L16.6 8.59998Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'pause-outline',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'play',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5V19L19 12L8 5Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },{ label: 'share',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'bookmark',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'mic',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.99 11L14.999 5C14.999 3.342 13.657 2 12 2C10.344 2 9 3.342 9 5V11C9 12.656 10.344 14 12 14C13.657 14 14.99 12.656 14.99 11ZM17.299 11C17.299 14 14.762 16.1 12 16.1C9.239 16.1 6.7 14 6.7 11H5C5 14.415 7.719 17.233 11 17.718V21H13V17.718C16.279 17.233 19 14.415 19 11H17.299Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
  { label: 'search',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill={fill} fillOpacity={fillOpacity}/>
    </svg>

  },
]

