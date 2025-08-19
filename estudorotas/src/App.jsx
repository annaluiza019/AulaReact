import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home"; 
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";

import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";
import RioGrandeSul from "./Paginas/RioGrandeSul";

import Acre from "./Paginas/Acre";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Para from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";

import Alagoas from "./Paginas/Alagoas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import Maranhao from "./Paginas/Maranhao";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandeNorte from "./Paginas/RioGrandeNorte";
import Sergipe from "./Paginas/Sergipe";

import Goias from "./Paginas/Goias";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import DistritoFederal from "./Paginas/DistritoFederal";

import "./App.css";


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

            <Route path="/SC" element={<SantaCatarina /> } />
            <Route path="/PR" element={<Parana /> } />
            <Route path="/RS" element={<RioGrandeSul /> } />

            <Route path="/AC" element={<Acre /> } />
            <Route path="/AP" element={<Amapa /> } />
            <Route path="/AM" element={<Amazonas /> } />
            <Route path="/PA" element={<Para /> } />
            <Route path="/RO" element={<Rondonia /> } />
            <Route path="/RR" element={<Roraima /> } />
            <Route path="/TO" element={<Tocantins /> } />

            <Route path="/AL" element={<Alagoas /> } />
            <Route path="/BA" element={<Bahia /> } />
            <Route path="/CE" element={<Ceara /> } />
            <Route path="/MA" element={<Maranhao /> } />
            <Route path="/PB" element={<Paraiba /> } />
            <Route path="/PE" element={<Pernambuco/> } />
            <Route path="/PI" element={<Piaui/> } />
            <Route path="/RN" element={<RioGrandeNorte/> } />
            <Route path="/SE" element={<Sergipe /> } />

            <Route path="/GO" element={<Goias/> } />
            <Route path="/MT" element={<MatoGrosso/> } />
            <Route path="/MS" element={<MatoGrossoSul/> } />
            <Route path="/DF" element={<DistritoFederal/> } />

         </Routes>
       </BrowserRouter>
    );
}