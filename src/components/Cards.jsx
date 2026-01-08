import React, { useState } from 'react'

const Cards = ({ props }) => {

  const [Fl, setFl] = useState(() => {
    const saved = localStorage.getItem(props.fullName);
    return saved !== null ? JSON.parse(saved) : props.followed;
  });

  const handleFollow = () => {
    const newValue = !Fl;
    setFl(newValue);
    localStorage.setItem(props.fullName, JSON.stringify(newValue));
  };

  return (
    <div className="bg-white rounded-lg m-2 w-64 overflow-hidden shadow">

      <img src={props.coverImage} className="w-full h-28 object-cover" />

      <img
        src={props.profile}
        className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white object-cover"
      />

      <h1 className="text-center font-bold text-black">
        {props.fullName}
      </h1>

      <p className="text-center text-gray-600 text-sm mb-2">
        {props.title}
      </p>

      <button
        onClick={handleFollow}
        className={`ml-2 mr-2 mb-4 w-60 py-2 rounded text-sm font-medium
        ${Fl ? "bg-gray-300 text-black" : "bg-blue-500 text-white"}`}
      >
        {Fl ? "Following" : "Follow"}
      </button>
    </div>
  )
}

export default Cards

