'use client'

import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(true);
    function handleMobile() {
        setIsMobile(!isMobile);
    }
  return (<>
    <div className='navbar__container shadow-2xl bg-[#231f20] text-xl max-w-[1240px] mx-auto h-[80px]
    flex justify-between items-center px-4'>
        <div className="logo__container">
            <img src='/brand.png' className='object-contain' width={200} height={200} alt="Haarmonie By Oz" />
        </div>
        <div className="navItems__container max-[600px]:hidden ">
            <ul className='flex gap-4 '>
                <Link href="/"><li className='hover:underline hover:underline-offset-8'>Home</li></Link>
                <Link href="preisliste"><li className='hover:underline hover:underline-offset-8'>Preisliste</li></Link>
                <Link href="kontakt"><li className='hover:underline hover:underline-offset-8'>Kontakt</li></Link>
            </ul>            
        </div>
        <div className='mobileBurger__container min-[600px]:hidden' onClick={handleMobile}>
        {isMobile ? <FaBars size={30}/>: <IoMdClose size={40}/>}
        </div>
    </div>

    {isMobile ?     <div className="mobileSide__container bg-[#231f20] absolute right-0 left-0 z-10 -translate-y-[1000px] duration-1000 ease-in-out">
             <ul className='flex flex-col text-3xl items-center gap-10 mt-40 '>
                <Link href="/"><li>Home</li></Link>
                <Link href="preisliste"><li>Preisliste</li></Link>
                <Link href="kontakt"><li>Kontakt</li></Link>
             </ul>  
    </div>:    <div className="mobileSide__container bg-[#231f20] min-[600px]:hidden h-screen w-full absolute right-0 left-0 z-10 translate-y-0 duration-1000 ease-in-out">
             <ul className='flex flex-col text-3xl items-center gap-10 mt-40 '>
                <Link href="/"><li onClick={handleMobile}>Home</li></Link>
                <Link href="preisliste"><li onClick={handleMobile}>Preisliste</li></Link>
                <Link href="kontakt"><li onClick={handleMobile}>Kontakt</li></Link>
             </ul>  
             <div className='social_media_container max-[750px]:pb-6'>
                    <ul className='flex gap-4 justify-center items-center pt-6'>
                        <li> <a href='https://www.facebook.com/HaarmonieOZ/?locale=de_DE'><FaFacebookSquare size={35}/></a></li>
                        <li> <a href="https://www.instagram.com/haarmoniebyoz/"><FaInstagram size={35}/></a></li>
                    </ul>
                </div>
    </div>}

    </>
  )
}

export default Navbar