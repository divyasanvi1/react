import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} =useParams()
  return (
    <div className='bg-gray-600 flex text-white text-center h-20 items-center justify-center text-3xl'>User :{userid}</div>
  )
}

export default User