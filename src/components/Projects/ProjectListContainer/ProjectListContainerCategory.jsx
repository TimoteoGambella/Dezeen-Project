import React from 'react'
import { useState } from 'react'
import ProjectList from '../ProjectList/ProjectList'
import { FaArrowRight  } from  "react-icons/fa";
import useProyectos from '../../../hooks/useProyectos'
import LoaderProjects from '../../Loader/LoaderProjects';

const ProjectListContainerCategory = () => {

    const entry = 'ProjectListContainerCategory'
    const {proyectos, cat, loading} = useProyectos(entry)
    const [viewAcual, setViewActual] = useState(0)

    const handleAfter = () => {
      setViewActual (viewAcual === proyectos.length-1 ? 0 : viewAcual+1)
    }    

  return (
      <div>
          <div className='Headers'>
              <div className='SubTitle d-flex-row font-w-400'>
              <h3>Proyectos Destacados</h3>
              <button onClick={handleAfter} className='ArrowRight d-flex-row font-roboto-cond'>
                  <p>Siguiente proyecto</p>
                  <FaArrowRight className='icon'/>
              </button>
              </div>
              {
                loading
                ? <LoaderProjects/>
                : <ProjectList  proyectos={proyectos} viewAcual={viewAcual}/>
              }
          </div>
      </div>
  )
}

export default ProjectListContainerCategory