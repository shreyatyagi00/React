import React from 'react'
import { useState } from 'react'

const Cards = ({props}) => {
  const [Fl, setFl] = useState(props.followed);

  return (
    <div className="bg-white rounded-lg m-2 w-64 overflow-hidden shadow">
       <img
        src={props.coverImage}
        alt="cover"
        className="w-full h-28 object-cover"
      />
      <div>
        <img 
        src={props.profile} 
        alt="" className='w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white object-cover'/>

        <h1 className="text-center font-bold text-black">{props.fullName}</h1>
        <p className="text-center text-gray-600 text-sm mb-2">{props.title}</p>

        <div className='flex justify-center gap-4 mt-4 mb-4'>
          <div>
          <h4 className='text-black text-center'>{props.likesCount}</h4>
          <p className='text-gray-600 text-sm text-center'>Likes</p>
          </div>
          <div>
          <h4 className='text-black text-center ml-2'>{props.postCount} </h4>
          <p className='text-gray-600 text-sm text-center'>Posts</p>
          </div>
          <div>
          <h4 className='text-black text-center ml-2'>{props.viewsCount}</h4>
          <p className='text-gray-600 text-sm text-center'>Views</p>
          </div>
        </div>
        <button
  onClick={() => setFl(!Fl)}
  className={`ml-2 mr-2 mb-4 w-60 py-2 rounded text-sm font-medium
  ${Fl ? "bg-gray-300 text-black" : "bg-blue-500 text-white"}`}
>
  {Fl ? "Following" : "Follow"}
</button>

      </div>
    </div>
  )
}

export default Cards

