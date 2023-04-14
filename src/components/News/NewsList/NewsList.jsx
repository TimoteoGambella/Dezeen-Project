import React from 'react'
import News from '../News/News'

const NewsList = ({noticias = [], viewAcual}) => {

  const viewArray = []
  for (let i = viewAcual; i < noticias.length; i++) {
    viewArray.push(
      noticias.map((noticia) => {
        return <News noticia={noticia} key={noticia.id} />     
      })[i]       
    )
  } 

  return (
    <div className="NewList d-flex-row">
        <>{viewArray}</>
        <>
          {noticias.map((noticia) => {
          return <News noticia={noticia} key={noticia.id} />     
          })
        }
        </>
    </div>

  )
}

export default NewsList