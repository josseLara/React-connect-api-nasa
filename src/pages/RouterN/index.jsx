
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";

import Apod from "../AJAX/Apod";
import Mars from "../Mars";
import MarsAjax from "../AJAX/MarsAjax";
import Nav from "../layout/Nav";



function RouterN() {
     return (
          < BrowserRouter>
               <Routes>
                    <Route path="*" element={<Nav></Nav>}>
                         <Route index element={<Apod><Home></Home></Apod>} />
                         <Route path="mars" element={<MarsAjax><Mars /></MarsAjax>} />
                    </Route>
               </Routes>
          </BrowserRouter>
     );
}

export default RouterN;