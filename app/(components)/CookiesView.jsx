import React from 'react'
import CookieConsent from 'react-cookie-consent'
const CookiesView = () => {
  return (
    <div>        <CookieConsent
    location="bottom"
    buttonText="Ich stimme zu"
    cookieName="cookieConsent"
    expires={365}
    hideOnAccept={true}
    hideOnDecline={true}
    declineButtonText="Ablehnen"
    enableDeclineButton="true"
  >
    Diese Webseite verwendet Cookies, um Google Maps einzubetten. Weitere Infos unter <a className="underline font-bold" href="/datenschutz">Datenschutz.</a>
  </CookieConsent></div>
  )
}

export default CookiesView