import React from 'react'
import NavBtn from "./NavBtn"
function NavBtnList({navItems, onClick}) {
  return (
    <>
      <ul>
        {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavBtn 
                name={item.name} 
                icon={item.icon} 
                href={item.href} 
                onClick={onClick}
                />
            </React.Fragment>
          ))}
      </ul>
    </>
  )
}

export default NavBtnList