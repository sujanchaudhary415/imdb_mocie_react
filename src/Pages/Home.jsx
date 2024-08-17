import React, { useEffect,useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../Components/MovieList/MovieList'

const Home = () => {
    const   [popularMovies,setPopularMovies]=useState([])
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=79c4adcb91db3b4871bc4862694585e8')
        .then(res=>res.json())
        .then(data=>setPopularMovies(data.results))
    },[])
  return (
    <>
    <div className='poster'>
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
            {popularMovies.map(movie=>
                    (
                        <Link style={{textDecoration:"none",color:"white"}}   to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />

                            </div>
                            <div className='posterImage__overlay'>
                                <div className='posterImage__title'>
                                    {movie.original_title}

                                </div>
                                <div className='posterImage__runtime'>
                                    {movie.release_date}    <span className='posterImage__rating'>
                                    {movie.vote_average}
                                    <i class="fa-solid fa-star"></i>
                                </span>

                                </div>
                                <div className='posterImage__description'>
                                    {movie.overview}

                                </div>

                            </div>
                        

                        </Link>
                    )
                )
            }
        </Carousel>
        <MovieList></MovieList>
    </div>
    
     
    </>
  )
}

export default Home
