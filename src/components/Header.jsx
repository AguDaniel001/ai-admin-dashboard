import React from 'react'
import ThemeToggle from './ThemeToggle'
function Header() {
  return (
    <div className='px-10 w-full sticky top-0 z-2 bg-[var(--bg-secondary)] '>
      <div className='flex items-center h-[4rem] justify-end'>
         <ThemeToggle />
      </div>
      <p className=' border-b-[1px] border-[var(--border-outline)] '></p>
    </div>
  )
}

export default Header