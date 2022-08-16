import React from 'react'
import mypic from './me.jpg'
import '../../App.css'
function ProfilePhoto  ()  {
  return (
   
   <img className='pic' src={mypic} alt='my profile '/>
  )
}

export default ProfilePhoto