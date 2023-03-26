import React, { useContext } from 'react'
import { contextProvider } from '../../context/Context'
// import { contextProvider } from '../../context/Context'
import "./Header.css"

const Header = () => {


  const { searchInput, handelChangeInput, enterInput} = useContext(contextProvider)

  return (

    <>

      <div className='header'>
        <p className='header-ptag'>Download High Quality Images by Creators</p>
        <p className='header-ptagsmall'>over 2.4millions+ stock images by our talented community</p>
        <input className='header-input' type="search" name='search' value={searchInput} placeholder='Search high resolution images' onChange={handelChangeInput} onKeyDown={enterInput} />
      </div>    

    </>


  )
}

export default Header
