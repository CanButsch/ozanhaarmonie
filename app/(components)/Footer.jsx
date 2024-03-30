'use client'
import React from 'react'

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import Link from 'next/link'
import Cookie from 'js-cookie'
import { useEffect } from 'react';
import { useState } from 'react';
const Footer = () => {
    const [showGMap, setShowGMap]= useState(false);
    useEffect(()=> {
        setShowGMap(Cookie.get("cookieConsent"))
    })
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col gap-6  max-[760px]:text-xl'>
        <div className='flex max-[760px]:flex-col justify-between px-4 mt-14'>
            <div className='kontakt__container flex flex-col gap-4 max-[760px]:items-center'>
                <div><h1 className='text-center text-3xl'>Kontakt</h1></div>
                <div className='kontakt__items'>
                    <ul>
                        <li className='flex gap-2 items-center'><span><GiPositionMarker/></span><span>Oststraße <span className='number_font'>48</span>, <span className='number_font'>59227</span> Ahlen</span></li>
                        <li className='flex gap-2 items-center'><span><FaPhoneAlt/></span><a  href='tel:023829619645' className='number_font'>+49 23829619645</a></li>
                        <li className='flex gap-2 items-center'><span><IoIosMail/></span><a href='mailto:info@haarmonie.de'>info@haarmonie.de</a></li>
                    </ul>
                </div>
                <div className='social_media_container max-[760px]:pb-6'>
                    <h1>Folgt uns auf Social Media</h1>
                    <ul className='flex gap-4 justify-center items-center pt-2'>
                        <li> <a href='https://www.facebook.com/HaarmonieOZ/?locale=de_DE'><FaFacebookSquare size={25} className="min-[760px]:size-8"/></a></li>
                        <li> <a href='https://www.instagram.com/haarmoniebyoz/'><FaInstagram size={25} className="min-[760px]:size-8"/></a></li>
                    </ul>
                </div>
            </div>
            <div className='maps__container flex flex-col gap-4 items-center'>
            <div><h1 className='text-3xl'>Anfahrt</h1></div>
            {showGMap ? <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4277.684995815504!2d7.885010694539567!3d51.75989487011765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b99d8c8bcc13bb%3A0x554b982010959ad7!2sHaarmonie%20by%20OZ!5e0!3m2!1sde!2sde!4v1711575296440!5m2!1sde!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>: <div className='bg-gray-900 p-4 h-30'>Cookies müssen akzeptiert sein um die Google Maps Karte zu sehen. <a href='https://www.google.com/maps?kgmid=/g/11h9wj13cx&hl=de-DE&kgs=a6a1a3786904cd26&shndl=30&shem=lose&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KbsTzIuMnblHMdealRAgmEtV&daddr=Oststra%C3%9Fe+48,+59227+Ahlen' className='border bg-gray-600'>Navigation zu unserem Salon</a></div> }
            </div>
            <div className='zeiten__con flex flex-col gap-4 max-[760px]:pt-6 max-[760px]:items-center'>
                <h1 className='text-center text-xl'>Öffnungszeiten</h1>
                <ul>
                    <li className='flex justify-between gap-12'><span>Montag:</span><span>Geschlossen</span></li>
                    <li className='flex justify-between gap-12'><span>Dienstag:</span><span className='number_font text-[16px]'>09:00 - 20:00</span></li>
                    <li className='flex justify-between gap-12'><span>Mittwoch:</span><span className='number_font text-[16px]'>09:00 - 20:00</span></li>
                    <li className='flex justify-between gap-12'><span>Donnerstag:</span><span className='number_font text-[16px]'>09:00 - 20:00</span></li>
                    <li className='flex justify-between gap-12'><span>Freitag:</span><span className='number_font text-[16px]'>09:00 - 20:00</span></li>
                    <li className='flex justify-between gap-12'><span>Samstag:</span><span>Geschlossen</span></li>
                    <li className='flex justify-between gap-12'><span>Sonntag:</span><span>Geschlossen</span></li>
                </ul>
            </div>
        </div>
        <div className='impressum__cont self-center p-4'>
            <ul className='flex gap-6 '>
                <li><Link href="impressum">Impressum</Link></li>
                <li><Link href="datenschutz">Datenschutz</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer