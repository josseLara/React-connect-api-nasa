import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css';
import $ from "jquery";


function Nav() {
     return (
          <>
               <nav className="nav">

                    <ul className="nav__list">
                         <li className="nav__item">
                              <Link to="/">
                                   <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_oqsaqqqn.json" background="transparent" speed="1" style={{ 'width': 50, 'height': 50 }} loop autoplay></lottie-player>
                                   <span>Home</span>
                              </Link>
                         </li>
                         <li className="nav__item">
                              <Link to="/mars">
                                   <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_whmmdqnm.json" background="transparent" speed="1" style={{ 'width': 50, 'height': 50 }} loop autoplay></lottie-player>
                                   <span> Mars</span>
                              </Link>
                         </li>

                    </ul>
               </nav>
               <Outlet />
          </>
     );
}

export default Nav;