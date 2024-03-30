'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Galleryimg from "./(components)/Galleryimg";
import Review from "./(components)/Review";
import CookieConsent from "react-cookie-consent";
const images = ['/Hero.jpg', '/Hero2.jpg','/randombild_unsplash1.jpg','/randombild_unsplash2.jpg']
const gal_img = ['/deniz.jpg','img1.jpg','img2.jpg']
const gal_img2 = ['img3.jpg','img4.jpg','img5.jpg']
const gal_img3= ['img6.jpg','img7.jpg','img8.jpg']
const gal_img4 = ['img10.jpg','img11.jpg','img12.jpg','img13.jpg']
const gal_img5= ['img6.jpg','img12.jpg','img2.jpg']
const gal_img6= ['img13.jpg','img3.jpg','img5.jpg']


const comments = [ {key:1,imgUrl: 'profilbild.png' , name: 'Mike Wagner', comment:" Ein Ausgezeichneter Salon hier im schönen Ahlen Ambiente und Friseur in meinem Falle Herrenschnitt Perfekt. Mein Schnitt sorgfältig und ein Zauber von Oz 🤭😉 Lieben Dank für einen tollen Schnitt, ich komme sehr gerne wieder.", stars: 5},
                  {key:2,imgUrl: 'profilbild2.png' , name: 'Nadja Schleinat', comment:"Mike ich danke dir für heute. Du hast super Arbeit gemacht. Vielen lieben Dank", stars: 5},
                  {key:3,imgUrl: 'profilbild3.png' , name: 'Detlev Kroll', comment:"Top Bedienung , professionelle Frisuren. Faire Preise. Ich bin und bleibe Stammkunde!!!👍Super Öffnungszeiten für Berufstätige Dienstag bis Freitag bis 20.00 Uhr", stars: 5},
                  {key:4,imgUrl: 'profilbild4.png' , name: 'Mandy Splett', comment:"Super Ergebnisse und sehr nettes Personal", stars: 5},
                  {key:5,imgUrl: 'profilbild6.png' , name: 'Deniz Cidik', comment:"Super Friseur. Der Ozan hat Ahnung, wie man Haare schneidet. Respekt.", stars: 5},
                  {key:6,imgUrl: 'profilbild5.png' , name: 'Phil Baumann', comment:"Bester Friseur den ich bis jetzt hatte.Danke dafür", stars: 5},]



export default function Home() {
  const [showGMap, setShowGMap] = useState(false)
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentGalImage, setCurrentGalImage] = useState(gal_img[0])
  const [currentGalImage1, setCurrentGalImage1] = useState(gal_img2[2])
  const [currentGalImage2, setCurrentGalImage2] = useState(gal_img3[1])
  const [currentGalImage3, setCurrentGalImage3] = useState(gal_img4[3])
  const [currentGalImage4, setCurrentGalImage4] = useState(gal_img5[2])
  const [currentGalImage5, setCurrentGalImage5] = useState(gal_img6[0])
  const [currentReview, setCurrentReview] = useState(comments[0])

  function handleAccept () {
    setShowGMap(true)
    window.location.reload();
  }

  function handleDecline () {
    setShowGMap(false)
    window.location.reload();
  }

  useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentImage(images[Math.floor(Math.random() * images.length)]);
          setCurrentReview(comments[Math.floor(Math.random() * comments.length)]);
          
      }, 5000)
      const intervalIdRev = setInterval(() => {
          setCurrentReview(comments[Math.floor(Math.random() * 6)]);
          
      }, 3500)
      
      const intervalId2 = setInterval(() => {
        setCurrentGalImage(gal_img[Math.floor(Math.random() * gal_img.length)]);
      }, 4000)
      const intervalId3 = setInterval(() => {
        setCurrentGalImage1(gal_img2[Math.floor(Math.random() * gal_img2.length)]);
      }, 6000)
      const intervalId4 = setInterval(() => {
        setCurrentGalImage2(gal_img3[Math.floor(Math.random() * gal_img3.length)]);
      }, 2000)
      const intervalId5 = setInterval(() => {
        setCurrentGalImage3(gal_img4[Math.floor(Math.random() * gal_img4.length)]);
      }, 4000)
      const intervalId6 = setInterval(() => {
        setCurrentGalImage4(gal_img5[Math.floor(Math.random() * gal_img5.length)]);
      }, 8000)
      const intervalId7 = setInterval(() => {
        setCurrentGalImage5(gal_img6[Math.floor(Math.random() * gal_img6.length)]);
      }, 12000)
     

      return () => clearInterval(intervalIdRev) ,() => clearInterval(intervalId), () => clearInterval(intervalId2), () => clearInterval(intervalId3),() => clearInterval(intervalId4),() => clearInterval(intervalId5),() => clearInterval(intervalId6),() => clearInterval(intervalId7);
  }, [])

  return (
    <main className="main">
        <div className="img__container relative mx-auto max-w-[1240px] h-[600px] max-[500px]:h-[500px]">
          <Image src={currentImage} fill className='absolute w-full h-full object-cover'/>
          <div className="absolute flex flex-col w-full h-full bg-transparent top-[50%] text-center gap-6 text-4xl"><h1 className="bg-transparent">Willkommen bei Haarmonie by Oz</h1> <h1 className="text-xl bg-transparent px-2">Ihr Spezialist für Frisuren und Kosmetik in Ahlen.</h1></div>
        </div>
        {/* Wer sind wir? */}
        <div className="about-us__container flex flex-col justify-center items-center gap-10 px-4 pt-10 mx-auto max-w-[1240px]">
          <h1 className="text-4xl">Über uns</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xl">Wir sind Haarmonie by Oz, wo Schönheit und Wohlbefinden Hand in Hand gehen! </p>
            <p className="text-xl">Vom Schnitt zur Coloration über die Kosmetik bis zur Haarpflege bieten wir alles an.<br/> Auch für besondere Anlässe!</p>
            </div>
        </div>
        {/* Gallery */}
        <div className="container max-w-[1240px] mx-auto mt-10">
          <h1 className="text-4xl p-10 text-center">Gallerie</h1>
        <div className="gallery__container gap-6 grid grid-cols-3 max-[600px]:grid-cols-2 mx-4">
            <Galleryimg imageUrl={currentGalImage}/>
            <Galleryimg imageUrl={currentGalImage1}/>
            <Galleryimg imageUrl={currentGalImage2}/>
            <Galleryimg imageUrl={currentGalImage3}/>
            <Galleryimg imageUrl={currentGalImage4}/>
            <Galleryimg imageUrl={currentGalImage5}/>
        </div>
        </div>
        <div className="mt-40">
          <h1 className="text-4xl mb-20 text-center">Rezensionen</h1>
        <div className=" max-w-[1240px] h-[400px] mx-auto flex items-center justify-center gap-[900px]">
          {/*comments.map((item) => <div key={item.key}><Review imgUrl={item.imgUrl} name={item.name} comment={item.comment} stars={item.stars}/> </div>)*/}
          <div className="animate-moveLeftToRight"><div className="animate-fadeIn"><Review imgUrl={currentReview.imgUrl} name={currentReview.name} comment={currentReview.comment} stars={currentReview.stars}/> </div></div>
        </div>
        </div>
        <CookieConsent
        location="bottom"
        buttonText="Ich stimme zu"
        cookieName="cookieConsent"
        expires={365}
        onAccept={handleAccept}
        onDecline={handleDecline}
        declineButtonText="Ablehnen"
        enableDeclineButton="true"
      >
        Diese Webseite verwendet Cookies, um Google Maps einzubetten. Weitere Infos unter <a className="underline font-bold" href="/datenschutz">Datenschutz.</a>
      </CookieConsent>
    </main>
  );
}
