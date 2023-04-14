import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../context/ApiContext';
import { useLocation, useParams } from 'react-router-dom';

const useProyectos = (entry) => {

    const {categoryId} = useParams()
    const {searchId} = useParams()
    const [proyectos, setProyectos] = useState([]) 
    const [loading, setLoading] = useState(true)

    const Categories = []
    for (let i=0; i<proyectos.length; i++){
        if(!Categories.includes(proyectos[i].categoria)) Categories.push(proyectos[i].categoria)
    } 
    // const cat = Categories[Math.floor(Math.random() * Categories.length)];  
    
    let dep=[]
    if(entry === 'ProjectListContainerCategory'){
        dep = []
    } else if( entry === 'NavbarProjects'){
        dep = []
    } else if(entry === 'ProjectsFoundContainer'){
        dep = [searchId]
    } else if(entry === 'ProjectListContainer'){
        dep = [categoryId]
    } else {
        dep = [categoryId]
    }

    useEffect(()=> {
        setLoading(true)
        const proyectosRef = collection(db, 'proyectos')
        
        let q = []
        if(entry === 'ProjectListContainer'){
            q = categoryId ? query(proyectosRef, where('categoria', '==', categoryId)) : proyectosRef
        }
        if(entry === 'NavbarProjects' || entry === 'ProjectsFoundContainer'){
            q = proyectosRef
        }
        if(entry === 'CarouselListContainer'){
            q = !categoryId ? query(proyectosRef,where('destacada', '==', true)) : query(proyectosRef,where('categoria', '==', categoryId))
        }
        if(entry === 'ProjectListContainerCategory'){
            // q = cat ? query(proyectosRef, where('categoria', '==', cat)) : proyectosRef
            q = query(proyectosRef, where('categoria', '==', "Destacados"))
        }

        getDocs(q)
            .then((resp) =>{
                const proyectosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                const newProyectosDB=[]
                if(entry === 'CarouselListContainer' && categoryId){
                    for(let i=0; i<3; i++){
                        newProyectosDB.push(proyectosDB[Math.floor(Math.random() * proyectosDB.length)])
                        }
                    setProyectos(newProyectosDB)
                }else {
                    
                    setProyectos(proyectosDB)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, dep)


  return ({
    proyectos, Categories, loading
  })
}

export default useProyectos