import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import Home from "../views/Home.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Proyectos from "../views/Proyectos.jsx";
import ProjectDetailContainer from "../components/Projects/ProjectDetailContainer/ProjectDetailContainer.js";
import Login from "../components/Login/Login.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Sigin from "../components/Sigin/Sigin.jsx";
import ProjectsFoundContainer from '../components/ProjectsFound/ProjectsFoundContainer';

const AppRouter = () => {

    const {user} = useContext(LoginContext)

  return (
    <BrowserRouter>
           <Navbar/>
            <Routes>

                {
                    user.logged
                    ? 
                    <>
                      <Route path="/login" element={<Navigate to ="/"/>} />
                      <Route path="/sigin" element={<Navigate to ="/"/>} />
                    </>
                    
                    : 
                    <>
                      <Route path="/login" element={<Login/>} />
                      <Route path="/sigin" element={<Sigin/>} />
                    </>
                }
                

                <Route path="*" element={<Navigate to ="/"/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/proyectos" element={<Proyectos/>} />
                <Route path="/proyectos/:categoryId" element={<Proyectos/>}/>
                <Route path="/proyectos/:categoryId/:proyectoId" element={<ProjectDetailContainer/>}/>
                <Route path="/search/:searchId" element={<ProjectsFoundContainer/>} />
            </Routes>
            <Footer/>
        
    </BrowserRouter>
  )
}

export default AppRouter