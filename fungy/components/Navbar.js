import React from 'react'
import Logo from './Logo'

const styles = {
    navbar: `flex items-center justify-between shadow-xl p-5`,

}


const Navbar = () => {
  return (
    <div className={styles.navbar}>
         <Logo/>
    </div>
  )
}

export default Navbar