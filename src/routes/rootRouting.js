import App from '../containers/app'
import NotFound from '../containers/not-found'
import AccessDenied from '../containers/access-denied'

export const app = {
  path: '/',
  component: App,
}

export const notFound = {
  exact: true,
  path: '/not-found',
  component: NotFound,
}

export const accessDenied = {
  exact: true,
  path: '/access-denied',
  component: AccessDenied
}
