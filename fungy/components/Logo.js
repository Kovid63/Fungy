import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.jpg'


const styles={
  logo: `w-10 mx-6 shadow-xl rounded-md border-[1px] bg-cyan-500`,
}

const Logo = () => {

  return (
    <div className={styles.logo}>
        <Image src={logo} alt='fungy-logo'/>
    </div>
  )
}

export default Logo