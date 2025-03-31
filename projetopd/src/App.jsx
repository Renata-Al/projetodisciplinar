import React,{lazy,Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Dropdown from "./componets/dropdown"
import Hearder from "./componets/hearder";
import Footer from "./componets/footer";
import '../src/App.css'
import './style/dropdown.css'

const Home = lazy(()=>import('./pags/home'))
const Ocorrencia = lazy(()=>import('./pags/ocorrencia'))
const Disciplinar = lazy(()=>import('./pags/disciplinar'))
const Sobre = lazy(()=>import('./pags/sobre'))
const Atendimento = lazy(()=>import('./pags/atendimento'))
const Gerenciar = lazy(()=>import('./pags/gerenciar'))
const Assistenciaestudantil  = lazy(()=>import('./pags/gerenciar'))

const App=()=>(
    <>
    <Hearder/>
    <div id="main-box">
    <div className="app-container">
        <Dropdown/>
        <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Ocorrencia" element={<Ocorrencia/>}/>
            <Route path="/Disciplinar" element={<Disciplinar/>}/>
            <Route path="/Sobre" element={<Sobre/>}/>
            <Route path="/Atendimento" element={<Atendimento/>}/>
            <Route path="/Gerenciar" element={<Gerenciar/>}/>
            </Routes>
        </Suspense>
        </div>
    </div>
    <Footer/>
    </div>
   
    </>
);

export default App;