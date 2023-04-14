import React from 'react'
import CarouselListContainer from '../components/Carousel/CarouselListContainer/CarouselListContainer';
import CreatorsList from '../components/Creators/CreatorsList';
import NewListContainer from '../components/News/NewsListContainer/NewListContainer';
import ProjectListContainer from '../components/Projects/ProjectListContainer/ProjectListContainer';
import ProjectListContainerCategory from '../components/Projects/ProjectListContainer/ProjectListContainerCategory';
import revista from '../assets/revista-banner.png'

const Home = () => {


  return (
    <div className='Home font-roboto-cond black'>
        
        <CarouselListContainer/>

        <div className='ContentHome'>

          <NewListContainer/>
          
          <hr className='Separator'/>

          <ProjectListContainer />

          <hr className='Separator'/>

          <div className='Magazine d-flex-row d-flex-center'>
            <img className='ImageMagazine' src={revista} alt="" />
            <div className='TextMagazine font-w-400 d-flex-column d-flex-center'>
              <h2>La revista más popular e influyente del mundo.</h2>
              <p>Nuestra misión es simple: traerte una selección cuidadosamente editada de los mejores proyectos y noticias de arquitectura, diseño e interiores de todo el mundo. 
              <br />
              <br />
              Marcus Fairs lanzó Dezeen en noviembre de 2006. En 2021, Dezeen fue adquirida por el grupo de medios danés JP/Politiken Media Group.</p>
              <button className='blue-button d-flex-center'>Leer más sobre esto</button>
            </div>
          </div>

          <hr className='Separator'/>

          <ProjectListContainerCategory/>

          <hr className='Separator'/>

          <CreatorsList/>

        </div>

    </div>
  )
}

export default Home