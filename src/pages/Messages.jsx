import React from 'react'
import Title from "../components/font/Title"
import Button from '../components/Button'
import CardText from '../components/CardText'
import Spacer from '../components/Spacer'

function Messages() {
  return (
    <div className=' px-10 pt-6 '>
      <div className='h-screen' >
      <Title>Messages</Title>
       <Spacer height="1.5rem"/>
      {/* <Button text='Add View' variant='primary' /> */}

      <div className='flex gap-4'>
        <CardText
        />
        <CardText
        />
        <CardText
        />
      </div>
       
      </div>
    </div>
  )
}

export default Messages