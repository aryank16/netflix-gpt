import React, { useState } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {

  const [suggestedMovies, setSuggestedMovies] = useState([]);
   
  const ctop = (cData) =>{
    
    console.log(cData)

  }
  // ctop('Aryan')

  ;

  return (
    <div>
      <div className=' -z-10 fixed  w-screen h-screen '>
        <img src={BG_URL} alt='logo' className="w-full h-full object-cover" 
/>
        </div>
     <GptSearchBar setMovies={setSuggestedMovies} prop={ctop}/>
     <GptMovieSuggestion getMovies= {suggestedMovies} />
    </div>
  )
}

export default GptSearch
