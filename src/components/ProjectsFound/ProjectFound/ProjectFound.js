import React from 'react'
import { Link } from 'react-router-dom'

const ProjectFound = ({projectFound}) => {

  return (
    <div className='ProjectFound'>
        <Link to={`/proyectos/${projectFound.categoria}/${projectFound.id}`}>
          <img src={projectFound["foto-main-1"]} alt="" />
        </Link>
        <h3>{projectFound.titulo}</h3>
        <p>{projectFound["desc-1"]}</p>
    </div>
  )
}

export default ProjectFound