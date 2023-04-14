import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../../context/ApiContext'
import NavbarProjects from '../../NavbarProjects/NavbarProjects';
import LoaderProjectDetail from '../../Loader/LoaderProjectDetail';
import NewsletterListContainer from '../../Newsletters/NewsletterListContainer/NewsletterListContainer';

 const ProjectDetailContainer = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const [detalleProyecto, setDetalleProyecto] = useState({ })
  const {proyectoId} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)
      const docRef = doc(db, 'proyectos', proyectoId)
      getDoc(docRef)
        .then((doc) => {
          setDetalleProyecto({id:doc.id, ...doc.data()})
        })
        .finally(() => {
            setLoading(false)
        })
  }, [proyectoId])

  return (
    <>
      <NavbarProjects/>
      <div className='ProjectDet d-flex-row'>
          {
            loading
            ? <LoaderProjectDetail/>
            : <ProjectDetail proyecto={detalleProyecto}/> 
          }
          <NewsletterListContainer/>
      </div>
    </>
  )
}

export default ProjectDetailContainer