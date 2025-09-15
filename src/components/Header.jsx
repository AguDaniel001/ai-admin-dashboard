import React from 'react'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { FaBars } from 'react-icons/fa6';
import Icon from './font/Icon';
import { BsSearch } from 'react-icons/bs';

function Header({ onOpen }) {
  return (
    <div className='h-[60px] px-10 max-md:px-0 w-full sticky top-0 z-2 bg-[var(--bg-secondary)] max-md:bg-[var(--bg-primary)] max-md:h-[45px] '>
      <div className='flex items-center h-[60px] justify-between min-md:justify-end max-md:px-5 max-md:h-[45px]'>

        <Button 
          className="min-md:hidden max-md:block icon"
          onClick={onOpen}
        >
          <FaBars />
        </Button> 
        <div className='flex gap-3'>
          <Button
            className="button-icon text-[var(--text-muted)] min-lg:hidden icon "
            onClick={() => setShowToggle(!showToggle)}
          >
            <Icon ><BsSearch /></Icon>
          </Button>

          <ThemeToggle />
        </div>
        
      </div>
      <p className='border-b-[1px] border-[var(--border-outline)]'></p>
    </div>
  )
}

export default Header
