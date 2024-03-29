import React from 'react'
import { FaStar } from "react-icons/fa";

const Review = ( {imgUrl, name, comment, stars}) => {
    const iterations = Array.from({ length: stars}, (v, i) => i);
  return (
  <div className='rev__container  rounded-lg flex flex-col bg-black-500 border movingDiv border-gray-500 mx-auto w-[550px] h-[350px] p-4'>
            <div className='user__container p-2 text-white text-2xl flex gap-4 justify-betwwen items-center'>
                <img src={imgUrl} className='w-16' />
                <h1>{name}</h1>
            </div>
            <div className='comment__container h-[350px] text-ellipsis overflow-hidden mt-6 px-2'>
                <p>&ldquo;{comment}&ldquo;</p>
            </div>
            <div className='rating__container flex  items-center justify-center mt-10 pb-2'>
                { iterations.map(() => <div key={1}><FaStar size={30} className="text-yellow-400"/> </div>) }
            </div>
  </div>
  )
}

export default Review