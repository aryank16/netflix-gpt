import React from 'react'

const VideoTitle = ({title,overview,movieId}) => {
  return (
    <div className='w-screen absolute aspect-video pt-[15%] px-24  text-white bg-gradient-to-r from-black' >
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className=' py-6 text-s w-1/4 text-white'>{overview}</p>
      <div className='margin-4'>
        <button className='bg-white text-black p-3 px-11 text-xl  rounded-lg hover:bg-opacity-80'> ▶ Play</button>
        <button className='mx-2 bg-gray-500 text-white p-3 px-11 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80 '>More info</button>
      </div>
    </div>
    
  );
  
}

export default VideoTitle
