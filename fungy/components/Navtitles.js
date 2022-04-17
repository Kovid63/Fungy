import React from 'react'

const styles = {
    container: `flex font-semibold text-cyan-800`,
    title: `mx-4 cursor-pointer text-lg truncate`,
}

const Navtitles = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Explore
        </div>
        <div className={styles.title}>
            Collections
        </div>
        <div className={styles.title}>
            Create
        </div>
        <div className={styles.title}>
            Sign In
        </div>
    </div>
  )
}

export default Navtitles