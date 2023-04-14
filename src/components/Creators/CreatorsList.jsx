import React, { useState } from 'react'
import Creators from './Creators'
import Creator1 from '../../assets/timoteo.png'
import Creator2 from '../../assets/erik.png'
import Creator3 from '../../assets/gheraldine.png'

const creadores = [
    {
        id: 1,
        foto: Creator1,
        nombre: "Timoteo Gambella",
        cargo: "Lider y Desarrollador",
        red1: "https://www.linkedin.com/in/timoteo-gambella-4b6418210",
        red2: "https://github.com/TimoteoGambella",
        red3: "mailto:timi.gambella@hotmail.com"
    },
    {
        id: 2,
        foto: Creator2,
        nombre: "Erick Emmanuel Magallán Gonzales",
        cargo: "Diseñador UX/UI",
        red1: "https://www.linkedin.com/in/erickmagallan/",
        red2: "https://www.behance.net/erickmagallan",
        red3: "mailto:arqeemg@gmail.com"
    },
    {
        id: 3,
        foto: Creator3,
        nombre: "Gheraldine Salazar Lasso",
        cargo: "Desarrolladora",
        red1: "https://www.linkedin.com/in/gheraldin-salazar-lasso/",
        red2: "https://github.com/GheraldineSalazarL",
        red3: "mailto:gh.eeraldin@gmail.com"
    }
]

const CreatorsList = () => {

    const [show, setShow] = useState('');

  return (
    <div className='Creators d-flex-center d-flex-column'>
        <h2 className='TitleCreators'>Conoce al equipo que creó el sitio web</h2>
        <div className='PhotosCreators'>
            {
                creadores.map((creador) => { 
                    return <Creators creador={creador} key={creador.id} show= {show} setShow={setShow}/>
                })    
            }
        </div>
       
    </div>
  )
}

export default CreatorsList