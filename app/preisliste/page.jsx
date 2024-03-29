import React from 'react'

const page = () => {
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col bg justify-center items-center'>
        <div className='table__container mt-10'>

        <div className='text-center pb-10 pt-10 text-4xl'>Preisliste</div>
        <div className='price__common '>
          <h1 className='text-center pt-6 pb-6'>Allgemein</h1>
          <table className="w-full">
                <thead >
                  <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center">Kurz</th>
                    <th className="text-center">Mittel</th>
                    <th className="text-center">Lang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waschen,Föhnen oder Legen</td>
                    <td>23€</td>
                    <td>26€</td>
                    <td>33€</td>
                  </tr>
                  <tr>
                    <td>Waschen und Schneiden</td>
                 
                    <td>38€</td>
                    <td>43€</td>
                    <td>53€</td>
                  </tr>
                  <tr>
                    <td>Haare nur Waschen</td>
                   
                    <td >4,50€</td>
                    <td> 5,50€</td>
                    <td>6,50€</td>
                  </tr>
                  <tr>
                    <td>Haare nur Antrocknen</td>
                    
                    <td>4,50€</td>
                    <td>5,50€</td>
                    <td>7,50€</td>
                  </tr>
                </tbody>
              </table>
        </div>

        <div className="prices_schnitt">
        <h1 className='text-center pt-6 pb-6'>Schnitt</h1>
        <table className="w-full">
                <thead>
                <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center">Kurz</th>
                    <th className="text-center">Mittel</th>
                    <th className="text-center">Lang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >Pony Schneiden</td>
                    <td>4€</td>
                    <td>5€</td>
                    <td>7€</td>
                  </tr>
                  <tr>
                    <td >Damen Haarschnitt</td>
                    <td>22€</td>
                    <td>22€</td>
                    <td>22€</td>
                  </tr>
                  <tr>
                    <td  >Damen Neuschnitt</td>
                    <td >25€</td>
                    <td>26€</td>
                    <td>28€</td>
                  </tr>
                  <tr>
                    <td >Kinder Haarschnitt bis 10 Jahre</td>
                    <td>13€</td>
                    <td>13€</td>
                    <td>13€</td>
                  </tr>
                  <tr>
                    <td  >Kinder Haarschnitt 11 - 14 Jahre</td>
                    <td>16€</td>
                    <td>16€</td>
                    <td>16€</td>
                  </tr>
                  <tr>
                    <td  >Herren Haarschnitt</td>
                    <td>21€</td>
                    <td>21€</td>
                    <td>21€</td>
                  </tr>
                  <tr>
                    <td >Herren Waschen, Schneiden, Styling</td>
                    <td>27€</td>
                    <td>27€</td>
                    <td>27€</td>
                  </tr>
                  <tr>
                    <td  >Maschinenschnitt einfach</td>
                    <td>13€</td>
                    <td>13€</td>
                    <td>13€</td>
                  </tr>
                  <tr>
                    <td  >Maschinenschnitt mit Übergang</td>
                    <td>17€</td>
                    <td>17€</td>
                    <td>17€</td>
                  </tr>
                  <tr>
                    <td  >Oberlippe Stutzen</td>
                    <td colspan="3">5€</td>
                    
                  </tr>
                  <tr>
                    <td  >Bart komplett Stutzen</td>
                    <td colspan="3">13€</td>
                  </tr>
                  <tr>
                    <td  >Bart Rasur</td>
                    <td colspan="3">17€</td>
                  </tr>
                  <tr>
                    <td  >Gesichtshaare Entfernen (Wachsen)</td>
                    <td colspan="3">5€</td>
                  </tr>
                </tbody>
              </table>
        </div>

        <div className="prices_coloration">
        <h1 className='text-center pt-6 pb-6'>Coloration</h1>
        <table className="w-full">
                <thead>
                <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center">Kurz</th>
                    <th className="text-center">Mittel</th>
                    <th className="text-center">Lang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td   >Intensive Tönung</td>
                    <td>32€</td>
                    <td>37€</td>
                    <td>46€</td>
                  </tr>
                  <tr>
                    <td   >Ansatz Farbe bis 3cm</td>
                    <td>27€</td>
                    <td>27€</td>
                    <td>27€</td>
                  </tr>
                  <tr>
                    <td  >Neufärbung</td>
                    <td >33€</td>
                    <td>43€</td>
                    <td>54€</td>
                  </tr>
                  <tr>
                    <td   >Ultra Soft Blondierung</td>
                    <td>32€</td>
                    <td>42€</td>
                    <td>53€</td>
                  </tr>
                  <tr>
                    <td  >Haubensträhnen</td>
                    <td colspan="3">32€</td>
                   
                  </tr>
                  <tr>
                    <td   >Foliensträhnen komplett</td>
                    <td>37€</td>
                    <td>63€</td>
                    <td>74€</td>
                  </tr>
                  <tr>
                    <td  >Folien – 1 Stück</td>
                    <td>2,50€</td>
                    <td>2,50€</td>
                    <td>2,50€</td>
                  </tr>
                  <tr>
                    <td   >Balayage – Ombré</td>
                    <td>37€</td>
                    <td>63€</td>
                    <td>74€</td>
                  </tr>
                  <tr>
                    <td  >Glossing</td>
                    <td>26€</td>
                    <td>32€</td>
                    <td>39€</td>
                  </tr>
                  <tr>
                    <td  >Dauerwelle</td>
                    <td>38€</td>
                    <td>45€</td>
                    <td>52€</td>
                  </tr>
                  <tr>
                    <td   >Head Line DW</td>
                    <td>33€</td>
                    <td>40€</td>
                    <td>46€</td>
                  </tr>
                </tbody>
              </table>
        </div>
        <div className="prices_pflege_kosmetik">
        <h1 className='text-center pt-6 pb-6'>Pflege und Kosmetik</h1>
        <table className="w-full">
                <thead>
                <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center" colSpan={3}>Preis</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td   >Augenbrauen Neuformen</td>
                    <td colspan="3">9€</td>
                    
                  </tr>
                  <tr>
                    <td   >Augenbrauen Nachzupfen</td>
                    <td colspan="3">7€</td>
                    
                  </tr>
                  <tr>
                    <td   >Augenbrauen Rasieren</td>
                    <td colspan="3" >4€</td>
                    
                  </tr>
                  <tr>
                    <td   >Augenbrauen Färben</td>
                    <td colspan="3">9€</td>
                  
                  </tr>
                  <tr>
                    <td   >Wimpern Färben</td>
                    <td colspan="3">10€</td>
                   
                  </tr>
                  <tr>
                    <td   >Oberlippe – Kinn</td>
                    <td colspan="3">6€</td>
                   
                  </tr>
                  <tr>
                    <td   >Ganzes Gesicht</td>
                    <td colspan="3">13€</td>
                    
                  </tr>
                 
                </tbody>
              </table>
        </div>
        <div className="prices_haarpflege">
        <h1 className='text-center pt-6 pb-6'>Haarpflege</h1>
            <table className="w-full">
                <thead>
                <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center">Kurz</th>
                    <th className="text-center">Mittel</th>
                    <th className="text-center">Lang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td   >Conditioner</td>
                    <td>5,50€</td>
                    <td>5,50€</td>
                    <td>5,50€</td>
                  </tr>
                  <tr>
                    <td   >Harkur</td>
                    <td>8,50€</td>
                    <td>8,50€</td>
                    <td>8,50€</td>
                  </tr>
                  <tr>
                    <td   >Colormaske</td>
                    <td >13,50€</td>
                    <td>18,50€</td>
                    <td>23,50€</td>
                  </tr>
                  
                </tbody>
              </table>
        </div>
        <div className="prices_besonderer_anlass">
        <h1 className='text-center pt-6 pb-6'>Besondere Anlässe</h1>
        <table className="w-full">
                <thead>
                <tr className='border'>
                    <th className="text-center" >Typ</th>
                    <th className="text-center">Kurz</th>
                    <th className="text-center">Mittel</th>
                    <th className="text-center">Lang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td   >Flechtfrisur</td>
                    <td>15€</td>
                    <td>20€</td>
                    <td>25€</td>
                  </tr>
                  <tr>
                    <td   >Kinder Flechtfrisur</td>
                    <td>12€</td>
                    <td>12€</td>
                    <td>12€</td>
                  </tr>
                  <tr>
                    <td   >Hochsteckfrisur</td>
                    <td>35€</td>
                    <td>55€</td>
                    <td>65€</td>
                  </tr>
                  <tr>
                    <td   >Curling / Lockung</td>
                    <td>30€</td>
                    <td>40€</td>
                    <td>50€</td>
                  </tr>
                  <tr>
                    <td   >Brautfrisur</td>
                    <td >85€</td>
                    <td>130€</td>
                    <td>160€</td>
                  </tr>
                  <tr>
                    <td   >Föhnfrisur für Anlässe</td>
                    <td >30€</td>
                    <td>40€</td>
                    <td>50€</td>
                  </tr>
                  <tr>
                    <td   >Kinderfrisur für Anlässe</td>
                    <td >25€</td>
                    <td>25€</td>
                    <td>25€</td>
                  </tr>
                  <tr>
                    <td   >Tages Make-up</td>
                    <td >30€</td>
                    <td>30€</td>
                    <td>30€</td>
                  </tr>
                  <tr>
                    <td   >Abend Make-up</td>
                    <td >40€</td>
                    <td>40€</td>
                    <td>40€</td>
                  </tr>
                  
                </tbody>
              </table>
        </div>

        </div>


        

        </div>
  )
}

export default page