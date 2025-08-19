import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

   


  return (
    <div className='pt-[10%] justify-center flex '>
     <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
        <input
        type='text'
        className='p-4 m-4 col-span-9'
        placeholder={lang[langKey]?.gptSearchPlaceholder || "Search..."}
        />
        <button className='bg-red-700 text-white rounded-lg py-2 px-4 m-4 col-span-3'>
        {lang[langKey]?.search || "Search"}
        </button>
        
     </form>
    </div>
  )
}

export default GptSearchBar
