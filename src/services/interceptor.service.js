// external libraries
import * as axios from 'axios'
// local services & data store
// local containers & components
// local constants & styles
import CONSTS from "../constants"

axios.defaults.baseURL = CONSTS.BASE_URL

const axiosInterceptors = () => {
  axios.interceptors.request.use(
    config => {
      // Do something before request is sent
      return config
    },
    error => {
      // Do something with request error
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    }
  )
}

export default axiosInterceptors
