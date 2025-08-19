import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
   useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()


  return (
    <div className='bg-black'>

   
    <div className='-mt-44 relative z-20  '>
      <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"}  movies={movies.popularMovies}/>
      
     
      <MovieList title={"Top Rated"}  movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"}  movies={movies.upcomingMovies}/>
      
    </div>
     </div>
  )
}

export default SecondaryContainer
