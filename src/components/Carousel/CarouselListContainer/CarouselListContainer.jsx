import React from 'react'
import CarouselList from '../CarouselList/CarouselList'
import useProyectos from '../../../hooks/useProyectos'
import LoaderCarousel from '../../Loader/LoaderCarousel'

const CarouselListContainer = () => {

    const entry = 'CarouselListContainer'
    const {proyectos, loading} = useProyectos(entry)
    
  return (
    <div>
      {
        loading
        ? 
          <LoaderCarousel/>
        : 
          <CarouselList proyectos={proyectos} />
      }
    </div>
  )
}

export default CarouselListContainer

