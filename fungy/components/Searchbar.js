import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'


const styles = {
    searchBarContainer:`flex text-white items-center bg-cyan-500 w-1/2 mx-4 h-9 rounded-md border-[1px] border-gray-200 shadow-xl`,
    searchIcon:`text-xl ml-2`,
    searchInput:`bg-transparent placeholder-white outline-none mx-2 w-full`,
}

const Searchbar = () => {

  const placeHolder=`Search Collections, NFT's and More`

  return (
    <div className={styles.searchBarContainer}>
        <BiSearchAlt className={styles.searchIcon}/>
        <input className={styles.searchInput} placeholder={placeHolder}/>  
    </div>
    
  )
}

export default Searchbar