import React from 'react'
import { useLocation } from 'react-router-dom'
import Project from '../Project/Project'

const ProjectList = ({proyectos = [], viewAcual}) => {

  const location = useLocation()

  const viewArray = []
  for (let i = viewAcual; i < proyectos.length; i++) {
    viewArray.push(
      proyectos.map((proyecto) => {
        return <Project proyecto={proyecto} key={proyecto.id} />     
      })[i]       
    )
  } 

  return (
    location.pathname==="/"
    ?
        <div className="d-flex-row">
            <>{viewArray}</>
            <>
              {
                  proyectos.map((proy) => {
                      return <Project proyecto={proy} key={proy.id}/>
                      
                  })
              }
            </>
        </div>
    :
        <div >
            {
                proyectos.map((proy) => {
                    return <Project proyecto={proy} key={proy.id}/>
                })
            }
        </div>
  )
}

export default ProjectList