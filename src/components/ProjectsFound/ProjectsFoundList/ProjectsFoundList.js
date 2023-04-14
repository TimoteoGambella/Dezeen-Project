import React from 'react'
import ProjectFound from '../ProjectFound/ProjectFound'

const ProjectsFoundList = ({projectsFound=[], searchId}) => {
    
    const projects = []
    
    projectsFound.forEach((proy) => {
        const searchText = proy["desc-1"].toLowerCase().normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").search(searchId.toLowerCase())

        searchText > -1 && projects.push(proy)
    })

  return (
    <div className='ProjectsFound font-roboto-cond'>
      <h1>Resultados para "{searchId ? searchId: ""}"</h1>
      <div className='ProjectsFoundList'>
        {
            projects.length>0
            ? 
              projects.map((proy) => {
                return <ProjectFound projectFound={proy} key={proy.id}/>
              })
            : 
              <p>No hay resultados para esta busqueda.</p>
        }
      </div>
    </div>
  )
}

export default ProjectsFoundList