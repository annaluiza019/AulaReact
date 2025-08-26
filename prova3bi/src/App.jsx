import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home"; 
import Mickey from "./paginas/Mickey";
import Minnie from "./Paginas/Minnie";
import Margarida from "./Paginas/Margarida";
import Pateta from "./Paginas/Pateta";
import Pato from "./Paginas/Pato";

import "./App.css";


export default function App()
{
    return (
       <BrowserRouter>
         <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/MM" element={<Mickey /> } />
            <Route path="/MN" element={<Minnie /> } />
            <Route path="/MG" element={<Margarida/> } />
            <Route path="/PT" element={<Pateta /> } />
            <Route path="/PD" element={<Pato /> } />

         </Routes>
       </BrowserRouter>
    );
}