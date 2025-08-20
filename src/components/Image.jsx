import React from 'react'

function Image({className, name, draggable }) {
  return <img className={className} draggable={draggable} src={name} alt="" />
  
}

export default Image