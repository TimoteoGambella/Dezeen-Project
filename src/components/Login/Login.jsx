import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import imgLogin from '../../assets/login-2.png'
import { BsCheck2 } from 'react-icons/bs';
import { VscClose } from "react-icons/vsc";
import RemindPassword from '../Modals/RemindPassword';

const Login = () => {

    const {login, usuarios} = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [msjLogin, setMsjLogin] = useState({
        msjEmail: '',
        msjPassword: '',
    })

    const [check, setCheck] = useState(true)

    const [modal, setModal] = useState (false)

    const handleInputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })

        e.target.name === "email" && setMsjLogin({msjPassword: '', errorEmail: ''})
        e.target.name === "password" && setMsjLogin({msjEmail: '', errorPassword: ''})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const match = usuarios.find(user => user.email === values.email)
        if (match){
            if(match.password === values.password){
                login(match, check)
            }else{
                setMsjLogin({
                    ...msjLogin,
                    msjPassword:'Tu contraseña es incorrecta.'
                })
            }
        }else{
            setMsjLogin({
                ...msjLogin,
                msjEmail:'No podemos encontrar este correo'
            })
        }
    }

    const handleRemind = (e) => {
        setModal(true)
    }

    useEffect(()=>{
        const handleClose = (e) =>{
            if(e.target.className=== "modalRemind font-roboto-cond" || e.target.className.baseVal=== "iconCloseModal"){
                setModal(false)
            }
        }

        window.addEventListener('click', handleClose)

        return () => {
            window.removeEventListener('click', handleClose)
        }   
    },[modal])

  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <NavLink to='/'><AiOutlinePlus className='iconClosedLogin'/></NavLink>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-login'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Ingresa a tu cuenta y disfruta de la experiencia completa de nuestro sitio web.</p>
                <form className='formLogin d-flex-column' onSubmit={handleSubmit} action="" >
                    <div className='input-forms d-flex-column'>
                        { 
                            values.email &&
                            <label className='labelInput'>Ingresa tu email</label>
                        }
                        <div className='inputContent'>
                            <input
                                name='email'
                                type={'email'}                       
                                placeholder='Ingresa tu email'
                                value={values.email} 
                                onChange={handleInputChange}
                                className={`${msjLogin.msjEmail ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.email && !msjLogin.msjEmail) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${msjLogin.msjEmail ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            msjLogin.msjEmail &&
                            <label className='labelError' > {msjLogin.msjEmail}</label>
                        }
                    </div>

                    <div className='input-forms d-flex-column'>
                        { 
                            values.password &&
                            <label className='labelInput' >Ingresa tu contraseña</label>
                        }
                        <div className='inputContent'>
                            <input
                                name='password'
                                type={'password'}                       
                                placeholder='Ingresa tu contraseña'
                                value={values.password}
                                onChange={handleInputChange}
                                className={`${msjLogin.msjPassword ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.password && !msjLogin.msjPassword) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${msjLogin.msjPassword ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            msjLogin.msjPassword &&
                            <label className='labelError' > {msjLogin.msjPassword}</label>
                        }
                    </div>

                    <button  className='white-button'>
                        Inicia Sesión
                    </button>
                    <br />

                    <div className='divCheckbox-login d-flex-row '>
                        <div>
                            <input 
                                className='checkbox'
                                type="checkbox"
                                name='check'
                                onChange={() => {setCheck(!check)}}
                                value={check}
                                defaultChecked
                            />
                            <label className='checkboxLabel'>
                                Recuérdame
                            </label>
                        </div>
                        <Link className='principal-color' onClick={handleRemind}>Olvidé mi contraseña.</Link>
                    </div>

                    <div className='finishLogin d-flex-center d-flex-column font-w-400'>
                        <p>¿No tienes cuenta?</p>
                        <Link to='/sigin' className='LinkSigIn principal-color'>Registrate aquí</Link>
                    </div>
                </form>
            </div>
        </div>
        <div className='imgLogin'>
            <img src={imgLogin} alt="" width="100%" height="100%"/>
        </div>   

        {
            modal===true &&
                <RemindPassword/> 
        }

    </div>
  )
}

export default Login