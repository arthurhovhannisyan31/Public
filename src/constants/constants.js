const CONSTS = {
  DOM: {
    ROOT: 'root'
  },
  REDIRECT_TIMEOUT: 10,
  BASE_URL: 'https://',
  ROUTES: {
    DASHBOARD: {
      ROUTE: ['/', '/index.html'],
      LABEL: 'Dashboard',
      ICON: 'nav-dashboard',
      GROUP: 'main'
    },
    MESSAGES: {
      ROUTE: '/messages',
      LABEL: 'Messages',
      ICON: 'nav-messages',
      GROUP: 'main'
    },
    NEWS: {
      ROUTE: '/news',
      LABEL: 'News',
      ICON: 'nav-tasks',
      GROUP: 'main'
    },
    HOTELS: {
      ROUTE: '/hotels',
      LABEL: 'Hotels',
      ICON: 'hotel',
      GROUP: 'main'
    },
    WEATHER: {
      ROUTE: '/weather',
      LABEL: 'Weather',
      ICON: 'weather',
      GROUP: 'main'
    },
    SETTINGS: {
      ROUTE: '/settings',
      LABEL: 'Settings',
      ICON: 'nav-settings',
      GROUP: 'secondary'
    },
    NOTIFICATIONS: {
      ROUTE: '/notifications',
      LABEL: 'Notifications',
      ICON: 'nav-notifications',
      GROUP: 'secondary'
    },
    LOGIN: { ROUTE: '/login' },
    WELCOME: { ROUTE: '/welcome' },
    NOT_FOUND: { ROUTE: ['*', '/not-found'] }
  },
  REGEXP: {
    // eslint-disable-next-line no-useless-escape
    ruRegExp: /[^а-яёА-ЯЁ\s\d`~!@№;,.#$%^&*()_+{}|:"<>?[\]'\\\/]/gm,
    // eslint-disable-next-line no-useless-escape
    enRegExp: /[^a-zA-Z\s\d`~!@№;,.#$%^&*()_+{}|:"<>?[\]'\\\/]/gm,
    numbers: /^[^\d]*$/gm
  },
  LANG: {
    RUS: {
      TITLE: 'Rus',
      VALUE: 'RUS'
    },
    ENG: {
      TITLE: 'Eng',
      VALUE: 'ENG'
    }
  },
  COMPONENTS: {
    STYLES: {
      COLORS: {
        TRANSPARENT: 'transparent',
        PRIMARY: '#42A5F5',
        SECONDARY: '#E3F2FD',
        URGENT: '#ffd204',
        POSITIVE: '#29CC97',
        BLACK: '#000',
        WHITE: '#fff',
        CRITICAL: '#ff0000',
        INACTIVE: '#F0F1F7',
        BORDER: '#98A2A8'
      }
    },
    BREAKPOINTS: {
      widthDesktopLg: 2560,
      widthDesktopFHD: 1920,
      widthDesktopMd: 1599,
      widthTabletLg: 1199,
      widthTabletMd: 959,
      widthMobileLg: 639,
      widthMobileMd: 479,
    },
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
    },
    OPTIONS: {
      DEFAULT_SELECT: [
        {
          value: 'one',
          label: 'One'
        },
        {
          value: 'two',
          label: 'Two'
        },
        {
          value: 'three',
          label: 'Three'
        },
        {
          value: 'four',
          label: 'Four'
        },
        {
          value: 'five',
          label: 'Five'
        },
        {
          value: 'six',
          label: 'Six'
        },
        {
          value: 'seven',
          label: 'Seven'
        },
        {
          value: 'eight',
          label: 'Eight'
        },
        {
          value: 'nine',
          label: 'Nine'
        },
        {
          value: 'ten',
          label: 'ten'
        },
        {
          value: 'eleven',
          label: 'eleven'
        }
      ],
    },
  },
}

export default CONSTS
