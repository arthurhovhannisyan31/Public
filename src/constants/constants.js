const CONSTS = {
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
  LANG: {
    RUS: {
      title: 'Rus',
      value: 'RUS',
    },
    ENG: {
      title: 'Eng',
      value: 'ENG'
    }
  },
  COMPONENTS: {
    STYLES: {
      COLORS: {
        TRANSPARENT: 'transparent',
        MAIN: '#42A5F5',
        SECONDARY: '#E3F2FD',
        URGENT: '#ffd204',
        POSITIVE: '#29CC97',
        BLACK: '#000',
        WHITE: '#fff',
        CRITICAL: '#ff0000',
        INACTIVE: '#F0F1F7',
        BORDER: '#98A2A8',
      }
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
      DEFAULT_SELECT:  [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two'},
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' },
        { value: 'seven', label: 'Seven' },
        { value: 'eight', label: 'Eight' },
        { value: 'nine', label: 'Nine' },
        { value: 'ten', label: 'ten' },
        { value: 'eleven', label: 'eleven' },
      ]
    }
  }
}

export default CONSTS
