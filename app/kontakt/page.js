'use client'
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
import Cookie from 'js-cookie'
import { useEffect } from 'react';
import { useState } from 'react';

const page = () => {
  const [showGMap, setShowGMap]= useState(false);
  useEffect(()=> {
      setShowGMap(Cookie.get("cookieConsent"))
  })
  return (
    <div className='max-w-[1240px] mx-auto mt-20 h-full mb-80 '>
        <div className='w-full text-center text-4xl pb-10'>Kontakt</div>
        <div className="img__container relative mx-auto max-w-[1240px] h-[600px] max-[760px]:h-[400px]  max-[760px]:mx-5">
          <Image src='/aussen.jpg' fill className='absolute w-full h-full object-cover rounded-l'/>
        </div>
        <div className='flex flex-col gap-4 mt-10 items-center'>
          <h1 className='text-4xl'>Anfahrt</h1>
          <h1 className='text-xl'>So finden sie uns</h1>
          <div className='w-full h-96'>
          {showGMap ? <iframe className='w-full h-full px-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4277.684995815504!2d7.885010694539567!3d51.75989487011765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b99d8c8bcc13bb%3A0x554b982010959ad7!2sHaarmonie%20by%20OZ!5e0!3m2!1sde!2sde!4v1711575296440!5m2!1sde!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> : <div className='bg-gray-900 p-4 h-30'>Cookies müssen akzeptiert sein um die Google Maps Karte zu sehen. <a href='https://www.google.com/maps?kgmid=/g/11h9wj13cx&hl=de-DE&kgs=a6a1a3786904cd26&shndl=30&shem=lose&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KbsTzIuMnblHMdealRAgmEtV&daddr=Oststra%C3%9Fe+48,+59227+Ahlen' className='border bg-gray-600'>Navigation zu unserem Salon</a></div>}
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10 items-center '>
          <h1 className='text-4xl'>Fragen?</h1>
          <h1 className='text-xl'>Rufen sie uns einfach an!</h1>
          <div className='w-full flex justify-center gap-4'>
          <span><FaPhoneAlt size={20}/></span><a  href='tel:023829619645' className='number_font text-xl'>+49 23829619645</a>
          </div>
          <h1 className='text-xl'>Oder schicken sie uns eine Email</h1>
          <div className='w-full flex justify-center gap-4 items-center'>
          <span><IoIosMail size={25}/></span><a href='mailto:info@haarmonie.de' className='text-2xl'>info@haarmonie.de</a>
          </div>
        </div>
        <div className=' flex justify-center mx-auto w-[80%]  mt-40'>
          <div className=''>
          <Link href="/"><img  src='brand.png' className='rounded-xl animated-border object-cover'/></Link>
          </div>
        </div>
    </div>
  )
}

export default page