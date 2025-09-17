import React from 'react'
import CardText from './CardText'
import Image from './Image'
import Button from './Button'

function CardBox({ imageName, iconName, iconClassName, titleText, subText, btnText, btnClassName}) {
  return (
    <div className=' max-w-[360px] mx-auto z-[2] ' >
     <div>
      <Image imageName={iconName} className={` w-[70px] h-[70px] mx-auto max-sm:w-[40px] max-sm:h-[40px] ${iconClassName} `} />
     </div>
      
     <div className='card p-0 text-left z-[2]  overflow-hidden' >
      <Image imageName={imageName} className=" w-full " />
       <div className='p-5 pt-8'>
        <CardText 
          titleText={titleText}
          subText={subText}
        />
        <Button text={btnText}  className={`btn outline round mt-5 ${btnClassName}`} />
      </div>
     </div>
    </div>
  )
}

export default CardBox