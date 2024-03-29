import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useState,useEffect } from 'react';
const CookieConsentView = () => {
  const [cookie,setCookie] = useState(true)
  const handleDecline = () => {
    // Lösche alle vorhandenen Cookies, die von deiner Webseite gesetzt wurden
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      Cookies.remove("AEC")
    });
    setCookie(false);
    // Setze einen Zustand oder tue etwas anderes, um anzuzeigen, dass die Cookies abgelehnt wurden
  };
  return (
    
    
    <div className='w-full'>
      {

    cookie ?  <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      cookieName="myCookieConsent"
      style={{ background: '#333' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
      onDecline={handleDecline}
    >
      <div className='flex gap-2'> <h1>Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Website erhalten.</h1> <h1 className=' text-black font-bold bg-white cursor-pointer rounded-xl' onClick={handleDecline}>Ablehnen</h1></div>
    </CookieConsent>: ""}
    </div>
  )
}

export default CookieConsentView