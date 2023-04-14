import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import emailjs from '@emailjs/browser';
import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../../context/ApiContext";
import mailOk from '../../assets/Hands Mail.png'
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2 } from 'react-icons/bs';
import { VscClose } from "react-icons/vsc";
import Swal from 'sweetalert2';

const RemindPassword = () => {

    const {usuarios} = useContext(LoginContext)

    const [values, setValues] =useState({
        email: "",
        codId: "",
        newPassword : "",
        newPasswordRepit : ""
    })

    const [error, setError] = useState({
        errorEmail: '',
        errorCodId: '',
        errorNewPass: '',
        errorNewPassRepit: ''
    })

    const [modals, setModals] = useState({
        remind: true,
        newPass: false,
        newPassOk: false
    })

    const match = usuarios.find(user => user.email === values.email)

    const handledInputChange = (e) => {
        setValues ({
                ...values,
                [e.target.name] : e.target.value
            })

        e.target.name === "email" && setError({...error, errorEmail: ''})
        e.target.name === "codId" && setError({...error, errorCodId: ''})
        e.target.name === "newPassword" && setError({...error, errorNewPass: ''})
        e.target.name === "newPasswordRepit" && setError({...error, errorNewPassRepit: ''})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(modals.remind===true){
            if(match){
                const data = {
                    id: match.id,
                    toMail: match.email
                }
                emailjs.send('service_rkbguuj', 'template_4x0n3pa', data, "EtNdfQu1yjfSB4fDT")

                setModals({
                    remind: false,
                    newPass: true,
                    newPassOk: false
                })  
            } else{
                values.email === '' ? setError({...error, errorEmail: "Ingrese un email"}) : setError({...error, errorEmail: "Este correo no pertenece a ningún usuario"}) 
            }
        }

        if(modals.newPass===true){
            if(match.id === values.codId){
                if(values.newPassword.length <= 9){
                    setError({...error, errorNewPass: "Tu contraseña debe tener mínimo 10 caracteres."})
                    return
                } 
                if(values.newPassword === ""){
                    setError({...error, errorNewPass: "Ingresar una contraseña."})
                    return
                } 
                if(values.newPasswordRepit === ""){
                    setError({...error, errorNewPassRepit: 'Repetir la contraseña.'})
                    return
                } 
                if(values.newPassword !== values.newPasswordRepit){
                    setError({...error, errorNewPassRepit: 'Tus contraseñas no coinciden.'})
                    return
                } 

                const usuarioRef = doc(db, 'usuarios', match.id);
                updateDoc(usuarioRef, { password: values.newPassword });

                const data = {
                    nombre: match.email, 
                    contrasena: values.newPassword,
                    toMail: match.email
                }
        
                emailjs.send('service_rkbguuj', 'template_7y8c547', data, "EtNdfQu1yjfSB4fDT")

                setModals({
                    remind: false,
                    newPass: false,
                    newPassOk: true
                }) 

            } else{
                setError({...error, errorCodId: "El código ID enviado no es correcto"})
            }
        }
    }

    const handleResend = () =>{
        
        const data = {
            id: match.id,
            toMail: match.email
        }
        emailjs.send('service_rkbguuj', 'template_4x0n3pa', data, "EtNdfQu1yjfSB4fDT")
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email reenviado',
                    showConfirmButton: false,
                    timer: 2500
                })
            }) 
    }


  return (
    <div className='modalRemind font-roboto-cond'> 
        {
            modals.remind===true &&
            <div className='modalRemindContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <h1>¿Olvidaste tu contraseña?</h1>
                <p>No te preocupes, ingresa tu email con el que ingresas a tu cuenta y nosotros te mandaremos un correo con las instrucciones para recuperarla.</p>
                <form onSubmit={handleSubmit}>
                    <div className='input-labels'>
                        { 
                            values.email &&
                            <label className='labelInput' >Ingresa tu email</label>
                        }
                        <div  className='inputContent'>
                            <input 
                                type="email" 
                                name='email'
                                value={values.email}
                                onChange={handledInputChange}
                                placeholder = "Ingresa tu email"
                                className={`${error.errorEmail ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.email && !error.errorEmail) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${error.errorEmail ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            error.errorEmail &&
                            <label className='error' > {error.errorEmail}</label>
                        }
                    </div>
                    <button className='blue-button'>Recuperar contraseña</button>
                </form>
            </div>
        }
        {
            modals.newPass===true &&
            <div className='modalNewPassContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <h1>Crea una nueva contraseña</h1>
                <h4>¿No te llegó el correo? <Link onClick={handleResend} className='link'>Haz click aquí para reenviar.</Link></h4>
                <p>Tu nueva contraseña debe ser distinta a tus contraseñas anteriores.</p>
                <form onSubmit={handleSubmit}>
                    <div className='input-labels'>
                        { 
                            values.codId &&
                            <label className='labelInput' >Ingresa el código ID enviado a tu correo</label>
                        }
                        <div  className='inputContent'>
                            <input 
                                type="text" 
                                name='codId'
                                value={values.codId}
                                onChange={handledInputChange}
                                placeholder = "Código ID"
                                className={`${error.errorCodId ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.codId && !error.errorCodId) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${error.errorCodId ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            error.errorCodId &&
                            <label className='error'> {error.errorCodId}</label>
                        }
                    </div>
                    <div className='input-labels'>
                        { 
                            values.newPassword &&
                            <label className='labelInput' >Crea una nueva contraseña</label>
                        }
                        <div  className='inputContent'>
                            <input 
                                type="password" 
                                name='newPassword'
                                value={values.newPassword}
                                onChange={handledInputChange}
                                placeholder = "Crea una nueva contraseña"
                                className={`${error.errorNewPass ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.newPassword && !error.errorNewPass) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${error.errorNewPass ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            error.errorNewPass &&
                            <label className='error' > {error.errorNewPass}</label>
                        }
                    </div>
                    <div className='input-labels'>
                        { 
                            values.newPasswordRepit&&
                            <label className='labelInput' >Repite tu nueva contraseña</label>
                        }
                        <div  className='inputContent'>
                            <input 
                                type="password" 
                                name='newPasswordRepit'
                                value={values.newPasswordRepit}
                                onChange={handledInputChange}
                                placeholder = "Repite tu nueva contraseña"
                                className={`${error.errorNewPassRepit ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.newPasswordRepit && !error.errorNewPassRepit) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${error.errorNewPassRepit ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            error.errorNewPassRepit &&
                            <label className='error error-repassword' > {error.errorNewPassRepit}</label>
                        }
                    </div>

                    <button className='blue-button'>Crear nueva contraseña</button>
                </form>
            </div>
        }
        {
            modals.newPassOk===true &&
            <div className='modalNewPassOkContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <img src={mailOk} alt="" />
                <h1>¡Tu contraseña fue creada con éxito!</h1>
                <p>En unos minutos te mandaremos una confirmación por correo. Click en "Iniciar sesión" para ingresar a tu cuenta.</p>
                <a href="/login"><button className='blue-button'>Iniciar sesión</button></a>
            </div>
        }
    </div>
  )
}

export default RemindPassword