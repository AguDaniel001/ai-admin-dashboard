import React from 'react'

function Icon({name, className, children}) {
  return (
    <div className={className}><i>{children}</i></div>
  )
}

export default Icon