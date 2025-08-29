import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  


  const handleSignOut =() =>{
    signOut(auth).then(() => {
    
}).catch((error) => {
  // An error happened.
});
  }

 useEffect(() =>{

  const unsubscribed = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName, photoURL} = user;
    dispatch(addUser({
      uid:uid, 
      email:email, 
      displayName:displayName, 
      photoURL:photoURL
    }));
    navigate("/browse")
    
    
  } else {
    // User is signed out
    dispatch(removeUser ());
    navigate("/")
   
  }
 })
  return ()=> unsubscribed()
 },[])

 const handleGptSearchClick = ()=>{
      
  dispatch(toggleGptSearchView())
 }


 const handleLanguageChange = (e) =>{
   dispatch(changeLanguage(e.target.value))
 }

 const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b 
    from-black z-10 flex flex-col md:flex-row justify-between'>
       <img 
       className='w-44' 
       src={LOGO}
       alt='logo'/>

     
      {user && 
      
      <div className='flex p-2'>
       { showGptSearch &&(
        <select className='p-2 m-2 bg-gray-700 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang =>
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>

          ))}
        </select>
      )}

       
         <button onClick={handleGptSearchClick} className='bg-red-600 px-4 py-1 mx-14 my-2 text-white rounded-lg'>
        {showGptSearch ? "Home":"GPT search"}</button>


       <div className='flex p-2'>
        <img className='w-12 h-12' alt='user icon' src={user?.photoURL}/>
       
       <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
       </div>
    </div>}
    </div>
  )
}

export default Header
