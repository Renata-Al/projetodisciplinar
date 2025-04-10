import React,{lazy,Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Dropdown from "./componets/dropdown"
import Hearder from "./componets/hearder";
import Footer from "./componets/footer";
import '../src/App.css'
import './style/dropdown.css'

const Home = lazy(()=>import('./pags/home'))
const Disciplinar = lazy(()=>import('./pags/disciplinar'))
const Sobre = lazy(()=>import('./pags/sobre'))
const Atendimento = lazy(()=>import('./pags/atendimento'))
const Solicitacoes = lazy(()=>import('./pags/solicitacoes'))
const BuscaAtiva = lazy(()=>import('./pags/buscaativa'))
const Login = lazy(()=>import('./pags/Login'))
const Assistencia  = lazy(()=>import('./pags/assistencia'))
const Justificativa = lazy(()=>import('./pags/justificativa'))
const CadastroCAE = lazy(()=>import('./componets/cadastroCAE'))

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
            <Route path="/Disciplinar" element={<Disciplinar/>}/>
            <Route path="/Sobre" element={<Sobre/>}/>
            <Route path="/Atendimento" element={<Atendimento/>}/>
            <Route path="/Solicitacoes" element={<Solicitacoes/>}/>
            <Route path="/BuscaAtiva" element={<BuscaAtiva/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Assistencia" element={<Assistencia/>}/>
            <Route path="/Justificativa" element={<Justificativa/>}/>
            <Route path="/CadastroCAE" element={<CadastroCAE/>}/>
            </Routes>
        </Suspense>
        </div>
    </div>
    <Footer/>
    </div>
   
    </>
);

export default App;