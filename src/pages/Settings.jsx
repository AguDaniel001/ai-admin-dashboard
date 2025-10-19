import React from 'react'
import Title from "../components/font/Title"
import Spacer from '../components/Spacer'
import ThemeToggle from '../components/ThemeToggle'
import ColorSetting from "../components/ColorSetting"
import { useEffect } from "react";
import { applyPrimaryColor } from "../hooks/colorChange";
import SubTitle from '../components/font/SubTitle'

function Settings() {

  useEffect(() => {
    applyPrimaryColor();
  }, []);

  return (
    <div className=' page-padding '>
      <div className='h-screen' >
        <Title>Settings</Title>
        <Spacer height="1.5rem"/>

        <div className='card'>

          <div className='flex gap-4'>
            <SubTitle className="pb-3"> Display </SubTitle>
          </div>

          <ColorSetting />

          <div className='flex gap-4'>
            Theme
            <ThemeToggle />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Settings