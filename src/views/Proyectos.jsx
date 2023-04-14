import React from 'react'
import ProjectListContainer from '../components/Projects/ProjectListContainer/ProjectListContainer'
import NewsletterContainer from '../components/Newsletters/NewsletterListContainer/NewsletterListContainer'
import CarouselListContainer from '../components/Carousel/CarouselListContainer/CarouselListContainer';
import NavbarProjects from '../components/NavbarProjects/NavbarProjects';

const Proyectos = () => {

  return (
    <>
      <NavbarProjects />
      <div className='Proyectos font-roboto-cond font-w-400'>
        <CarouselListContainer/>

        <div className='ContentProyectos d-flex-row'>
            <div className='ColumnProjects'>
                <h1>Proyectos</h1>
                <hr className='hrContentProyectos'/>
                <ProjectListContainer/>
            </div>

            <NewsletterContainer/>

        </div>
        </div>
    </>
  )
}

export default Proyectos