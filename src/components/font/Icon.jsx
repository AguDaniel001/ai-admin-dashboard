import React from 'react'

function Icon({name, className}) {
  return (
    <div className={className}><i>{name}</i></div>
  )
}

export default Icon