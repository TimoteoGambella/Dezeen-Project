import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useProyectos from '../../hooks/useProyectos'
import LoaderNavbarProjects from '../Loader/LoaderNavbarProjects'

const NavbarProjects = () => {
  
  const entry = 'NavbarProjects'
  const {categoryId} = useParams()
  const {Categories, loading} = useProyectos(entry)


  return (
    
        <nav className='MenuProyectos d-flex-row d-flex-center font-w-400' >
          {
            loading 
            ?
                <LoaderNavbarProjects/>
            :
                Categories.map((cat) => {
                      return <NavLink to={`/proyectos/${cat}`} key={cat} className={`ItemMenuProyecto ${cat===categoryId ? "colorSelect" : ""}`}>{cat}</NavLink>
                      
                  })
          }
        </nav>
  )
}

export default NavbarProjects