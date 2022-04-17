import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.jpg'

const Logo = () => {

  return (
    <div className=''>
        <Image src={logo} alt='fungy-logo'/>
    </div>
  )
}

export default Logo