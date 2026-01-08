import React, { useState } from 'react'
import Cards from './components/Cards.jsx'

const App = () => {
   
  const users=[
    {
      fullName: "jasmine fernandez",
      title: "Web Developer",
      profile: "https://plus.unsplash.com/premium_photo-1668896123991-82a45e64ebdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlvdW5nJTIwdGVlbmFnZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8fHww",
      likesCount: 12500,
      postCount: 320,
      viewsCount: 980000,
      followed: true
    },
    {
      fullName: "Steveni Rogers",
      title: "AI/ML Engineer",
      profile: "https://plus.unsplash.com/premium_photo-1668485968660-67a0f563d59a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcnQlMjBoYWlyJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      coverImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      likesCount: 10400,
      postCount: 280,
      viewsCount: 870000,
      followed: false
    },
    {
      fullName: "lily Odinson",
      title: "Data Scientist",
      profile: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvdW5nJTIwdGVlbmFnZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      coverImage: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      likesCount: 15800,
      postCount: 410,
      viewsCount: 1120000,
      followed: true
    },
    {
      fullName: "Bruce Wayne",
      title: "Backend Developer",
      profile: "https://images.unsplash.com/photo-1637659134707-7d5c07af9107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlkZGVuJTIwZmFjZSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
      coverImage: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww",
      likesCount: 14300,
      postCount: 390,
      viewsCount: 1010000,
      followed: true
    },
    {
      fullName: "Peter Parker",
      title: "Frontend Developer",
      profile: "https://images.unsplash.com/photo-1761290546539-e60e2761d6fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpZGRlbiUyMGZhY2UlMjBib3l8ZW58MHx8MHx8fDA%3D",
      coverImage: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
      likesCount: 16200,
      postCount: 450,
      viewsCount: 1300000,
      followed: false
    },
    {
      fullName: "Zainab Kent",
      title: "Full Stack Developer",
      profile: "https://plus.unsplash.com/premium_photo-1676994901426-a61941a52fe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlqYWJpJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      coverImage: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlfGVufDB8fDB8fHww",
      likesCount: 13800,
      postCount: 340,
      viewsCount: 940000,
      followed: true
    },
    {
      fullName: "Natasha Romanoff",
      title: "Data Analyst",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      coverImage: "https://plus.unsplash.com/premium_photo-1664203068007-52240d0ca48f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91bmclMjB0ZWVuYWdlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      likesCount: 11900,
      postCount: 260,
      viewsCount: 760000,
      followed: false
    },
    {
      fullName: "Tina Challa",
      title: "AI Researcher",
      profile: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      coverImage: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      likesCount: 15100,
      postCount: 370,
      viewsCount: 1080000,
      followed: true
    },
    {
      fullName: "Wanda Maximoff",
      title: "Cybersecurity Expert",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8fDA%3D",
      coverImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      likesCount: 16700,
      postCount: 420,
      viewsCount: 1250000,
      followed: true
    },
    {
      fullName: "Barry Allen",
      title: "Technical Lead",
      profile: "https://media.istockphoto.com/id/1524455399/photo/a-young-boy-is-screaming-and-holding-his-palm-open-in-a-stop-gesture-to-counteract-bullying.webp?a=1&b=1&s=612x612&w=0&k=20&c=3pmQKxye5XSiXEDCWdqFN0lwyodgMDumyo2oMfgozN0=",
      coverImage: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww",
      likesCount: 9900,
      postCount: 210,
      viewsCount: 640000,
      followed: false
    }
  ];
 
  return (
    <div className="bg-black text-white min-h-screen p-5 flex flex-wrap gap-4">
      {users.map(function (elem) {
        return <Cards props={elem} />;
      })}
    </div>
  )
}

export default App
