import React, { useState } from 'react'
import { FaSearch  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [value, setValue] = useState('')
    
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/search/${value}`);
        setValue("")
    }

  return (
    <form className='search d-flex-row d-flex-center' onSubmit={handleSubmit}>
        <button type='submit'><FaSearch className='icon'/></button>
        <input 
            type="text" 
            name="value" 
            placeholder='¿Qué estás buscando hoy?'
            value={value} 
            onChange={handleInputChange}
        />
    </form>
  )
}

export default Search