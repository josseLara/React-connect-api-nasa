import React, { useState, useContext, useRef } from 'react';
import Card from '../componets/Card/Card';
import HomeContext from '../contexts/HomeContext';
import './Home.css';



function Home() {

     const { url, explanation, title, getData } = useContext( HomeContext );

     // ======================input date=======================

     const text_input = useRef( 'text_input' );
     const [dataInputResolv, setDataInputResolv] = useState( '' );
     const inputChange = function ( valor ) {
          setDataInputResolv( valor );
     }
     // ==================================================
     return (
          <section className="home">
               <div className="home__Apod">
                    <div className="centered-cover">
                         <h1>Astronomy Picture of the Day</h1>
                         <div className="break-flex">
                              <div id="alert"></div>
                              <div className="alert alert-info">
                                   <p id="target" ref={text_input}>{dataInputResolv}</p>
                              </div>
                              {/* ================ input ============================= */}
                              <form>
                                   <input className="form" type="date" id='date' onChange={e => inputChange( e.target.value )} />
                                   <div className="custom-btn btn-3" onClick={() => getData( dataInputResolv )}><span>Send</span></div>

                              </form>
                         </div>
                    </div>
                    <div className="home__cards">
           {/* ================ card-component ============================= */}
                         <Card ></Card>
                    </div>
               </div>
               {/* ==================== home__desc ========================= */}
               <div className="home__desc">
                    <ul className="desc__list">

                         <li className="desc__item">
                              <div className="desc__title">
                                   <i className='bx bxl-react'></i>
                                   <span>React</span>
                              </div>
                              <p className="desc__text">This application makes requests to an external api</p>
                         </li>
                         <li className="desc__item">
                              <div className="desc__title">
                                   <i className='bx bx-rocket'></i>
                                   <span>API</span>
                              </div>
                              <p className="desc__text">connection to the api and handling of promises</p>
                         </li>
                         <li className="desc__item">
                              <div className="desc__title">
                                   <i className='bx bx-devices'></i>
                                   <span>Responsive</span>
                              </div>
                              <p className="desc__text">workable for mobile devices</p>
                         </li>
                    </ul>
               </div>
               {/* =================== info api example ==================================== */}
               <div className="home__info">
                    <div className="info__content">
                         <h1 className='info__title'>API nasa</h1>
                         <p className="info__text-firsh">Astronomy Picture of the Day</p>
                         <p className="info__text-second">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                         <div className="custom-btn btn-3" ><span>More</span></div>

                    </div>
                    <img src="https://images.pexels.com/photos/39644/robonaut-machines-dexterous-humanoid-39644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nasa" className="info__img" />
               </div>
          </section>

     );
}

export default Home;