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
  COMPONENTS: {
    BUTTONS: {
      COLORS: {
        VALUES: ['main', 'secondary'],
        DEFAULT: 'main'
      }

    }
  }
}

export default CONSTS
