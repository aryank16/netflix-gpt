import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constant';
import {GoogleGenAI} from '@google/genai';


const GptSearchBar = ({setMovies,prop}) => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null)


    const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);

      const json = await data.json();

      return json.results
    }


    const handleGptSearchClick = async () =>{
       
    const geminiQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma separated like the example esult given ahead. Example result : Gadar, Sholay, Don. Golmaal, Koi Mil gaya. just give me the name of the movies in comma separated and nothing else. Do not even mention ...here are the so called movies";

    
    const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

  const geminiResults = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: geminiQuery,
  });

  if(!geminiResults.text){
    //TODO :Write  error handling
  }

 console.log(geminiResults.text);

// const geminiResults = 'Superbad, Bridesmaids, Airplane!, Monty Python and the Holy Grail, This is Spinal Tap'

  const geminiMovies = geminiResults.text.split(',')

  // console.log(geminiMovies)



  const data = geminiMovies.map((movie) => searchMovieTMDB(movie))

  // console.log(data)

  const tmdbResults = await Promise.all(data);

  // console.log(tmdbResults)

  setMovies(tmdbResults)

  

}
    


return (
    
      <div className='pt-[10%] justify-center flex '>
     <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
        type='text'
        className='p-4 m-4 col-span-9'
        placeholder={lang[langKey]?.gptSearchPlaceholder || "Search..."}
        />
        <button className='bg-red-700 text-white rounded-lg py-2 px-4 m-4 col-span-3' onClick={handleGptSearchClick}>
        {lang[langKey]?.search || "Search"}
        </button>
        
     </form>
    </div>
  )
}

export default GptSearchBar
