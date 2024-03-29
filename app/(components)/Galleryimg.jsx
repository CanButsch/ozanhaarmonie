import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Galleryimg = ({imageUrl}) => {
  return (
    <div className="relative h-full w-full">
    <img src={imageUrl} className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-1000 ease-in-out "/>
    <div className="absolute top-0 bg-transparent hover:bg-gray-500/30 h-full w-full">
      <div className="absolute w-full h-full opacity-0 hover:opacity-100 left-0 right-0 bg-transparent gap-2 flex items-center justify-center ">
      <a href='https://www.instagram.com/haarmoniebyoz/' className="bg-transparent"><FaInstagram size={30} className="bg-transparent hover:fill-black"/></a>
      <a href='https://www.facebook.com/HaarmonieOZ/photos?locale=de_DE' className="bg-transparent"><FaFacebookSquare size={30} className="bg-transparent hover:fill-black"/></a>
      </div>
    </div>
  </div>
  )
}

export default Galleryimg