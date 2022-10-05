import React, { useRef } from 'react';
import MarsContext from '../contexts/MarsContext';
import { useContext } from 'react';
import './Mars.css';
import CardMars from '../componets/CardMars';


function Mars() {
     const {getDataMars} = useContext(MarsContext);
     const dateMarsInput = useRef('dateMarsInput');

     return ( 
          <>
          <section className="mars">
          <div className="mars__rover">
               <h1>Mars Rover Photos</h1>
                    <div className="centered-cover">
                         <div className="break-flex">
                              <div id="alert"></div>
                              <div className="alert alert-info">
                                   <p id="target"></p>
                              </div>
                              <form>
                                   <input className="form" type="date" id="dateMarsInput" ref={dateMarsInput} />
                                   <div className="custom-btn btn-3" onClick={()=>{
                                       if(dateMarsInput.current.value ){
                                         getDataMars(dateMarsInput.current.value);
                                       }
                                       
                                   }}><span>Send</span></div>

                              </form>
                         </div>
                    </div>
                    <div className="mars__cards">

                       <CardMars index={0}></CardMars>
                       <CardMars index={1}></CardMars>
                       <CardMars index={2}></CardMars>
                       <CardMars index={3}></CardMars>
                       <CardMars index={4}></CardMars>
                       <CardMars index={5}></CardMars>
                    </div>
               </div>
          </section>
          </>
      );
}

export default Mars;