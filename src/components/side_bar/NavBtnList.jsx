import React from 'react'
import NavBtn from "./NavBtn"
function NavBtnList({navItems}) {
  return (
    <>
      <ul>
        {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavBtn name={item.name} icon={item.icon} href={item.href} />
            </React.Fragment>
          ))}
      </ul>
    </>
  )
}

export default NavBtnList