import React from 'react'
import Logo from './Logo'
import Navtitles from './Navtitles'
import Searchbar from './Searchbar'

const styles = {
    navbar: `flex shadow-xl items-center h-16`,

}


const Navbar = () => {
  return (
    <div className={styles.navbar}>
         <Logo/>
         <Searchbar/>
         <Navtitles/>
    </div>
  )
}

export default Navbar