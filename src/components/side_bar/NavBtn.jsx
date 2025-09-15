import React from 'react'
import { Link, useLocation } from 'react-router'
import Icon from '../font/Icon'

function NavBtn({ name, icon, href, onClick }) {
  const location = useLocation()
  const isActive = location.pathname === href

  return (
    <li>
      <Link
        to={href}
        onClick={onClick}   
        
        className={`flex gap-4 items-center w-full rounded-[6px] h-[40px] px-[20px] 
          transition-colors duration-100 text-sm font-medium hover:text-[var(--text)]
          ${isActive ? 'bg-gradient-to-r from-[#5546a186] to-[#5546a11e] hover:text-[var(--title)]' : ''}
        `}
      >
        <Icon
          className={`text-[1.1rem] ${isActive ? 'text-[var(--color-primary)]!' : 'text-[var(--text-muted)]'}`}
        >
          {icon}
        </Icon>
        <span className="max-lg:!hidden max-md:!block">{name}</span>
      </Link>
    </li>
  )
}

export default NavBtn
