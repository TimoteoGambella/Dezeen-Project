import React from 'react'
import Carousel from '../Carousel/Carousel'
import { useState } from 'react';

const CarouselList = ({proyectos=[]}) => {

  const [imagenActual, setImagenActual] = useState(0)

  return (
    <div className='CarouselList'>
        {
            proyectos.map((proy,index) => {
                return(
                      imagenActual === index
                      &&
                      <Carousel proyecto={proy} key={proy.id} proyectosLength={proyectos.length} imagenActual={imagenActual} setImagenActual={setImagenActual}  />
                )
            })
        }
    </div>
  )
}

export default CarouselList