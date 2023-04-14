import React from 'react'
import { useEffect, useState } from 'react'
import NewsList from '../NewsList/NewsList'
import { FaArrowRight  } from  "react-icons/fa";
import {db} from '../../../context/ApiContext'
import { collection, getDocs } from 'firebase/firestore';
import LoaderNews from '../../Loader/LoaderNews';

const NewListContainer = () => {

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const newsRef = collection(db, 'noticias')
        getDocs(newsRef)
        .then((resp) =>{
            const newsDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            setNoticias(newsDB)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    const [viewAcual, setViewActual] = useState(0)

    const handleAfter = () => {
      setViewActual (viewAcual === noticias.length-1 ? 0 : viewAcual+1)
    }

  return (
    <div className='Headers'>
      <div className='SubTitle d-flex-row font-w-400'>
        <h3>Noticias destacadas</h3>
        <button onClick={handleAfter} className='ArrowRight d-flex-row font-roboto-cond'>
          <p>Siguiente página</p>
          <FaArrowRight className='icon'/>
        </button>
      </div>
      {
        loading
        ? <LoaderNews/>
        : <NewsList  noticias={noticias} viewAcual={viewAcual}/>
      }
    </div>
  )
}

export default NewListContainer