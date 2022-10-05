
import React, { useContext, useRef } from 'react';
import './CardMars.css';
import MarsContext from '../../contexts/MarsContext';

function CardMars({index}) {
     const { urlMars, nameMars, fullNameMars, dateMars, setUrlMars } = useContext( MarsContext );
// =============== Loader ================
const cardLottieMars = useRef('cardLottieMars');
const cardMars__img = useRef('cardMars__img');

     return (
          <>
               <div className="cardMars">
                    <div className="cardMars__circle">
                         <div className="circle">
                              <span className="circle__blue"></span>
                              <span className="circle__red"></span>
                              <span className="circle__green"></span>
                         </div>
                         <div className="cardMars__date">{dateMars[index]}</div>
                    </div>
                    <div className="cardMars__info">
                         <div className="cardMars__head">
                              <lottie-player ref={cardLottieMars} className="loader" src="https://assets8.lottiefiles.com/packages/lf20_0VBFAg.json" background="transparent" speed="1" style={{ width: "100%", height: "150px" }} loop autoplay></lottie-player>
                              <img src={urlMars[index]} alt="ast" ref={cardMars__img} className="cardMars__img" onLoad={() => {
                                  cardLottieMars.current.style.display = 'block';
                                  cardMars__img.current.style.display = 'none';
                                 
                                   setTimeout( () => {
                                        cardLottieMars.current.style.display = 'none';
                                        cardMars__img.current.style.display = 'block';
                                   }, 3000 );

                              }} />
                         </div>
                         <div className="cardMars__name">
                              <h1 className="cardMars_fullName">{fullNameMars[index]}</h1>
                              <p className="cardMars_content">{nameMars[index]}</p>
                         </div>

                    </div>
               </div>
          </>
     );
}

export default CardMars;