import React from 'react'
const page = () => {
  return (
    <div className='max-w-[1240px] mx-auto gap-10 mt-40 flex flex-col h-full mb-40'>
        <div className='impressum__container mt-20 mx-10'>
            <h1 className='text-4xl pb-5'>Impressum</h1>
            <ul>
            <li className='flex gap-2 items-center'><span className='text-lg'>Oststraße <span className='number_font'>48</span>, <span className='number_font'>59227</span> Ahlen</span></li>
            <li className='flex gap-2 items-center'><a  href='tel:023829619645' className='number_font'>+49 23829619645</a></li>
            </ul>
        </div>
        
        <div className='impressum__container mt-20 mx-10 pb-20'>
            <h1 className='text-3xl pb-5'>Inhaberin und Geschäftsführerin: Zeynep Aldemir</h1>
            <ul className='flex flex-col gap-2'>
            <li className='flex gap-2 items-center'><span className='number_font'>St.-Nr.: 000 / 0000/ 0000</span></li>
            <li className='flex gap-2 items-center'><span className='number_font'>Rechtlicher Hinweis: Die EU hat ein OnlineVerfahren zur Beilegung von Streitigkeiten zwischen Unternehmern und Verbrauchern geschaffen. Informationen dazu finden Sie unter https://​ec.​europa.​eu/​consumers/​odr/</span></li>
            <li className='flex gap-2 items-center'><span className='number_font'>Haarmonie By Oz beteiligt sich nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.</span></li>
            <li className='flex gap-2 items-center'><span className='number_font'>Bildnachweis: <a href="https://www.pexels.com/">Pexels</a> und <a href="https://unsplash.com/">Unsplash</a></span></li>
            </ul>
        </div>
        
    </div>
  )
}

export default page