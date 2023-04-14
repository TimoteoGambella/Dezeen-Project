import React from 'react'
import { useState } from 'react'
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
import { useEffect } from 'react';

const Creators = ({creador, props, show, setShow}) => {

    const [hover, setHover] = useState(false)
    const handleMouseEnter =() => {
        setHover(true)
        setShow(creador.nombre)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    useEffect(()=>{
        const handleClose = (e) =>{
            if(e.target.className!== "modal" && e.target.className!== "modalContent" && e.target.className!== "iconRedesModal"){
                setHover(false)
            }
        }

        window.addEventListener('click', handleClose)

        return () => {
            window.removeEventListener('click', handleClose)
        }
    },[])


  return (
    <>
        <img onMouseEnter={handleMouseEnter} src={creador.foto} alt="" />
        {
            hover && show===creador.nombre
            && 
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='modal'>
                <div className='modalContent'>
                    <img src={creador.foto} alt="" />
                    <h5>{creador.nombre}</h5>
                    <p>{creador.cargo}</p>
                    <div className='d-flex-row'>
                        <a href={`${creador.red1}`} target='blank' ><BsLinkedin className='iconRedesModal'/></a>
                        {
                            creador.id===2 ? <a href={`${creador.red2}`} target="blank"><BsBehance className='iconRedesModal'/></a> : <a href={`${creador.red2}`} target="blank"><BsGithub className='iconRedesModal'/></a>
                        }
                        <a href={`${creador.red3}`} target="blank"><SiGmail className='iconRedesModal'/></a>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Creators