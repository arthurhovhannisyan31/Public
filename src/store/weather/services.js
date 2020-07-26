// external libraries
import * as d3 from 'd3'
// local services & data store
// local containers & components
// local constants & styles

// todo move jsons to my-json-server.typicode.com/

export const getGithubusercontent = async () => {
  const res = await d3.json(
    'https://raw.githubusercontent.com/sxywu/react-d3-example/master/public/sf.json'
  )
  return res.map((d) => {
    return Object.assign(d, { date: new Date(d.date) })
  })
}

export const NY_JSON = 'ny.json'
export const SF_JSON = 'sf.json'

export const getAllJSONData = () => {
  return Promise.all([
    fetch(`${process.env.PUBLIC_URL || ''}/sf.json `),
    fetch(`${process.env.PUBLIC_URL || ''}/ny.json `)
  ])
    .then((response) => Promise.all(response.map((res) => res.json())))
    .then(([sf, ny]) => {
      // eslint-disable-next-line
      sf.map((el) => (el.date = new Date(el.date)))
      // eslint-disable-next-line
      ny.map((el) => (el.date = new Date(el.date)))
      return {
        sf,
        ny
      }
    })
}

export const getJSONData = ({ source }) => {
  return fetch(`${process.env.PUBLIC_URL || ''}/${source} `)
    .then((res) => res.json())
    .then((res) => {
      // eslint-disable-next-line
      res.map((el) => (el.date = new Date(el.date)))
      return res
    })
}

// const getGithubusercontent = async () => {
//   const res = await d3.json(
//     'https://raw.githubusercontent.com/sxywu/react-d3-example/master/public/sf.json'
//   )
//   return res.map((d) => {
//     return Object.assign(d, { date: new Date(d.date) })
//   })
// }
