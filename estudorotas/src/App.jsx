import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home"; 
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";

export default function App()
{
    return (
       <BrowserRouter>
         <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/sp" element={<SaoPaulo /> } />
            <Route path="/RJ" element={<RiodeJaneiro /> } />
            <Route path="/mg" element={<MinasGerais /> } />
            <Route path="/ES" element={<EspiritoSanto /> } />
         </Routes>
       </BrowserRouter>
    );
}