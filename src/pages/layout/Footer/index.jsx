import React from 'react';
import './Footer.css'

function Footer() {
     return (
          <footer className="footer">
               <div className="footer__developer">
                    <span>¿Que Hacemos? </span>
                    <div className="developer__descrip">
                         <span>desarrollo web</span>
                         <span>Tiendas online</span>
                         <span>Font-end</span>
                         <span>Back-end</span>
                    </div>
               </div>
               <div className="red__social">
                    <span>Seguinos en redes</span>
                    <div className="redes__icon">

                    <i className='bx bxl-linkedin-square'></i>
                    <i className='bx bxl-whatsapp-square' ></i>
                    <i className='bx bxl-twitter' ></i>
                    </div>
               </div>
               <div className="program">

                    <i className='bx bx-code-alt' ></i>
                    <strong> José Lara </strong>
                    <i className='bx bx-code-alt' ></i>
               </div>
          </footer>
     );
}

export default Footer;