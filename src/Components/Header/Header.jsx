import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerleft'>
                <Link to='/'> <img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt='this is imdb logo'/></Link>
                <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular </span></Link>
                <Link to='/movies/top_rated'style={{textDecoration:"none"}}><span>Top Rated </span></Link>
                <Link to='/movies/upcoming'style={{textDecoration:"none"}}><span>Upcomming </span></Link>


            </div>

        </div>
    )
}

export default Header
