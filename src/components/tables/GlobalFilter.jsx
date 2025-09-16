import React, { useState, useEffect } from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter?.(value || undefined)   // safe call if setFilter exists
    }, 300)
    return () => clearTimeout(timeout)
  }, [value, setFilter])

  return (
    <span className='w-full'>
      {" "}
      <input type="text" placeholder='Search' className=' outline-0 text-[var(--text)] text-sm w-full '  value={value || ""}
        onChange={(e) => setValue(e.target.value)} />
    </span>
  )
}

export default GlobalFilter