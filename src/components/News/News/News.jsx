import React from 'react'

const News = ({noticia}) => {

  return (
    <div className='News d-flex-column'>
        <img className='ImageNews' src={noticia.foto} alt="" />
        <h3>{noticia.titulo}</h3>
        <p className='DescriptionNews'>{noticia.descripcion}</p>
    </div>
  )
}

export default News