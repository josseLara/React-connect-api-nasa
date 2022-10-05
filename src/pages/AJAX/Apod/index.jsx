import HomeContext from "../../contexts/HomeContext";
import React, { useState } from 'react';


function Apod( props ) {

     // ======================hooks========================
     const [date, setDate] = useState( '2022-02-01' );
     const [url, setUrl] = useState( '' );
     const [explanation, setExplanation] = useState( '' );
     const [title, setTitle] = useState('');
     
     // ======================API==========================
     const getData = ( date ) => {
          const nasa = window.fetch( `https://api.nasa.gov/planetary/apod?date=${date}&api_key=BSbllvhhxmKXhkptuM1VpKnZqFa8JbmN80KhzIo5` ).then( ( res ) => res.json() )
               .then( ( json ) => {
                    setUrl( json.url );
                    setExplanation(json.explanation);
                    setTitle(json.title);
                    setDate(json.date);
                    console.log( json )
               } )
     };

     return (
          <HomeContext.Provider value={{ url: url,explanation:explanation,title:title, 
          date:date,getData: getData }} >
               {props.children}
          </HomeContext.Provider>
     );
}

export default Apod;