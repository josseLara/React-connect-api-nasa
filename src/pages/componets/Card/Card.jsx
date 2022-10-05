import HomeContext from '../../contexts/HomeContext';
import React, { useContext, useRef } from 'react';
import './Card.css'


function Card() {
     const { url, explanation, title, date, setUrl } = useContext( HomeContext );
     const card_img = useRef('card_img');
     const card_lottie = useRef('card_lottie');

     return (
          <>
               <div className="card">
                    <div className="card__circle">
                         <div className="circle">
                              <span className="circle__blue"></span>
                              <span className="circle__red"></span>
                              <span className="circle__green"></span>
                         </div>
                         <div className="card__date">{date}</div>
                    </div>
                    <div className="card__info">
                         <div className="card__head">
                         <lottie-player  ref={card_lottie} src="https://assets8.lottiefiles.com/packages/lf20_0VBFAg.json" background="transparent" speed="1" style={{width: "100%", height: "150px"}} loop autoplay></lottie-player> 
                              <img src={url} alt="nasa" ref={card_img} className="card__img" onLoad={()=>{
                                   card_lottie.current.style.display = 'block';
                                 card_img.current.style.display = 'none';
                                 
                                   
                                   setTimeout( () => {
                                        card_lottie.current.style.display = 'none ';
                                        card_img.current.style.display = 'inline-block';
                                   
                                   }, 3000 );
                                  
                              }}/>
                         </div>
                         <h1 className="card_title">{title}</h1>
                         <p className="card_content">{explanation}</p>
                    </div>
               </div>
          </>
     );
}

export default Card;