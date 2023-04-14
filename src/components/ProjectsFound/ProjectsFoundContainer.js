import React from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../../hooks/useProyectos'
import LoaderProjectsFound from '../Loader/LoaderProjectsFound'
import ProjectsFoundList from './ProjectsFoundList/ProjectsFoundList'

const ProjectsFoundContainer = () => {

    const {searchId} = useParams()
    const entry = 'ProjectsFoundContainer'
    const {proyectos, loading} = useProyectos(entry)

  return (
  
      loading 
      ? <LoaderProjectsFound/>
      : <ProjectsFoundList  projectsFound={proyectos}  searchId={searchId}/>
    
  )
}

export default ProjectsFoundContainer