import React from 'react'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import Icon from './font/Icon';
import { FaBars } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';
import { FaRegUser } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';
import { PiUserBold } from 'react-icons/pi';
import { HiOutlineUser } from 'react-icons/hi2';
import { LuUserRound } from 'react-icons/lu';
import { RiSearch2Line } from 'react-icons/ri';

function Header({ onOpen }) {
  return (
    <div className='h-[60px] px-10 max-md:px-0 w-full sticky top-0 z-2 bg-[var(--bg-secondary)] max-md:bg-[var(--bg-primary)] max-md:h-[45px] duration-300 ease-in-out '>
      <div className='flex items-center h-[60px] justify-between min-md:justify-end max-md:px-5 max-md:h-[45px]'>

        <Button 
          className="min-md:hidden max-md:block icon max-md:!text-xl "
          onClick={onOpen}
        >
          <FaBars />
        </Button> 
        <div className='flex gap-3'>
          <Button
            className="button-icon text-[var(--text-muted)] min-lg:hidden icon "
            onClick={() => setShowToggle(!showToggle)}
          >
            <Icon ><RiSearch2Line /></Icon>
          </Button>

          <ThemeToggle />

          <Button
            className="button-icon text-[var(--text-muted)] icon "
            onClick={() => setShowToggle(!showToggle)}
          >
            <Icon >< PiUserBold /></Icon>
          </Button>
        </div>
        
      </div>
      <p className='border-b-[1px] border-[var(--border-outline)]'></p>
    </div>
  )
}

export default Header
