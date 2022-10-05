
import React, { useState } from 'react';
import $ from "jquery";
import MarsContext from '../../contexts/MarsContext';

function MarsAjax( props ) {

     // ======================hooks========================
     const [dateMars, setDateMars] = useState( [] );
     const [urlMars, setUrlMars] = useState( [] );
     const [nameMars, setnameMars] = useState( [] );
     const [fullNameMars, setfullNameMars] = useState( [] );

     // ======================API==========================
     const getDataMars = ( dateMar ) => {
          setUrlMars( [] );
          setnameMars( [] );
          setfullNameMars( [] );
          setDateMars( [] );
          const nasaMars = window.fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateMar}&api_key=BSbllvhhxmKXhkptuM1VpKnZqFa8JbmN80KhzIo5` ).then( ( res ) => res.json() )
               .then( ( json ) => {
                    $( '.cardMars' ).css( 'display', 'flex' );

                    ( ( json.photos ).slice( 0, 6 ) ).forEach( element => {

                         setUrlMars( state => [...state, element.img_src] );
                         setnameMars( state => [...state, `( ${element.camera.name} )` ] );
                         setfullNameMars( state => [...state, element.camera.full_name] );
                         setDateMars( state => [...state, element.earth_date] );

                    } );

               } )
     };
     console.log( nameMars )
     return (
          <MarsContext.Provider value={{
               urlMars: urlMars, nameMars: nameMars, fullNameMars: fullNameMars,
               dateMars: dateMars, getDataMars: getDataMars
          }} >
               {props.children}
          </MarsContext.Provider>
     );
}

export default MarsAjax;