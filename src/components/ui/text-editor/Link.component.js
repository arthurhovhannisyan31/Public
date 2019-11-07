import React from "react"

const Link = ({ children, contentState, entityKey }) => {
  const { url } = contentState.getEntity(entityKey).getData()
  return (
    <a href={url} style={{ cursor: "pointer" }}>
      {children}
    </a>
  )
}

export default Link
