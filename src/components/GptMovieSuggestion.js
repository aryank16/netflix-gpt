import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'

const GptMovieSuggestion = ({getMovies}) => {
    
   
    
    

  return (
    <div className='px-6 bg-black bg-opacity-90'>
    
    <div className='flex flex-wrap'>
        
        <div className='flex flex-wrap '>
          {getMovies.map((movie)=>
          movie.map((e)=>
          (<MovieCard key={e.id} posterPath={e.poster_path} title={e.title}/>)))}  
           
        </div>
      
    </div>
    </div>
    

      
     
  )
}

export default GptMovieSuggestion
