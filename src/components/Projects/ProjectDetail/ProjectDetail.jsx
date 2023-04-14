import React from 'react'
import { BsStar } from "react-icons/bs";

const ProjectDetail = ({proyecto}) => {

  return (
    <div className='ProjectDetail d-flex-column font-roboto-cond font-w-400'>
        <h2>{proyecto.titulo}</h2>
        <img className='img1' src={proyecto["foto-main-1"]} alt="" />
        <div className='typeProject d-flex-row'>
            <h3>{proyecto.tipo}</h3>
            <div className='d-flex-row'>
                <div className='ScoreProject d-flex-column'>
                    <p>¿Te gustó éste artículo?</p>
                    <div>
                        <BsStar className='star'/>
                        <BsStar className='star'/>
                        <BsStar className='star'/>
                        <BsStar className='star'/>
                        <BsStar className='star'/>
                    </div>
                </div>
                <button className='white-button'>Guarda este proyecto</button>
            </div>
        </div>
        <p className='descProject'>{proyecto["desc-1"]}</p>

        <img className='img2' src={proyecto["foto-main-2"]} alt="" />
        <p className='descProject'>{proyecto["desc-2"]}</p>
        
        <div className='images d-flex-column'>
            <img className='img3' src={proyecto["foto-main-3"]} alt="" />
            <div className='imgs d-flex-row'>
                <img className='imgx' src={proyecto["foto-main-1"]} alt="" />
                <img className='imgx' src={proyecto["foto-main-2"]} alt="" />
                <img className='imgx' src={proyecto["foto-main-3"]} alt="" />
                <img className='imgx' src={proyecto["foto-extra-2"]} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail