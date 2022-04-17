import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'

const styles = {
    navbar: `flex shadow-xl items-center h-16`,

}


const Navbar = () => {
  return (
    <div className={styles.navbar}>
         <Logo/>
         <Searchbar/>
    </div>
  )
}

export default Navbar