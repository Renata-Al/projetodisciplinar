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
const Ajuda = lazy(()=>import('./pags/Ajuda'))
const Atendimento = lazy(()=>import('./pags/atendimento'))
const Gerenciar = lazy(()=>import('./pags/gerenciar'))

const App=()=>(
    <>
    <Hearder/>
    <div className="app-container">
        
        <Dropdown/>
        <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Ocorrencia" element={<Ocorrencia/>}/>
            <Route path="/Disciplinar" element={<Disciplinar/>}/>
            <Route path="/Ajuda" element={<Ajuda/>}/>
            <Route path="/Atendimento" element={<Atendimento/>}/>
            <Route path="/Gerenciar" element={<Gerenciar/>}/>
            </Routes>
        </Suspense>
        </div>
    </div>
    <Footer/>
    </>
);

export default App;