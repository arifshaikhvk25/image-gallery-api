import React, { useContext, useState } from 'react'
import { contextProvider } from '../../context/Context'
import "./Navbar.css"


const Navbar = () => {

    const { search, result, handelChange, enter } = useContext(contextProvider)

    return (
        <div className='navbar'>

            <div className='navbar-logo'>
                <p>Image Gallery</p>
            </div>

            <div className='input-search'>
                <input className='navbar-search' type="search" name="search" id="" placeholder='Search images here' value={search} onChange={handelChange} onKeyDown={enter} />
                <button className='search' onClick={result}  disabled={!search} type="submit">Search</button>
            </div>
            

            <ul className='navbar-ul'>
                <li>Explore</li>
                <li>Connection</li>
                <li>Community</li>
            </ul>

            <div className='navbar-darkmode'>
                <p>Dark Mode</p>
            </div>

        </div>
    )
}

export default Navbar
