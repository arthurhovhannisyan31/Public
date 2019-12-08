import React, { useState, useEffect } from "react"

const NotFound = ({timeout}) => {

  const [state, setState] = useState(timeout)

  useEffect(() => {
    const interval = setInterval(() => {
      setState(sec => (sec - 1))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  },[])

  return (
    <div>
      <h1>404, Page Not Found</h1>
      <span>You will be redirected to main page in {state}</span>
    </div>
  )
}

export default NotFound
