import React from 'react'

const Newsletter = ({Newsletter}) => {
    return (
        <div className=''>
            <img className='ImagePrincipal' src={Newsletter.foto} alt="" />
            <h3>{Newsletter.titulo}</h3>
            <p>{Newsletter.descripcion}</p>
        </div>
    )
}

export default Newsletter