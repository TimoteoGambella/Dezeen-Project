import React from 'react'
import { FaArrowRight,  FaArrowLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Carousel = ({proyecto, proyectosLength, imagenActual, setImagenActual}) => {

  const handleNext = () => {
    setImagenActual (imagenActual === proyectosLength-1 ? 0 : imagenActual+1)
  }
  const handlePrevious = () => {
    setImagenActual (imagenActual === 0 ? proyectosLength-1 : imagenActual-1)
  }

  const handleSelect = (index) => {
    setImagenActual(index)
  }
 
  const items = [];
  for (let i = 0; i < proyectosLength; i++) {
    items.push(i+1);
  } 
  
  return (
    <div className='Carousel'>
        <Link to={`/proyectos/${proyecto.categoria}/${proyecto.id}`}><img src={proyecto['foto-main-1']} alt="" /></Link>
        <h3 >{proyecto.categoria}</h3>
        <h1 > {proyecto.titulo}</h1>
        <h4 >{proyecto.tipo}</h4>
        <p>{proyecto['desc-1']}</p>
        <button className='Left' onClick={handlePrevious}><FaArrowLeft className='icon'/></button>
        <button className='Right' onClick={handleNext}><FaArrowRight className='icon'/></button>
        <div className='itemsAll d-flex-row d-flex-center'>
          {
            items.map((_, index) => (
              <button onClick={() => handleSelect(index)} key={index} className={imagenActual===index ? "item-active" : "item"}></button>
            ))
          }
        </div>
    </div>
  )
}


export default Carousel