import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { db } from "./ApiContext";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=> {
        const userRef = collection(db, 'usuarios')
        getDocs(userRef)
            .then((resp) =>{
                const usuariosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                setUsuarios(usuariosDB)
            })
    }, [])


    const loginStorage = JSON.parse(localStorage.getItem('logeo')) || 
    [{
        user : '',
        logged:false,
        recording: false
    }]

    const [user, setUser] = useState(loginStorage)
    
    const login = (match, check) => {
        setUser({
            user: match.email,
            logged: true,
            recording: check
        })
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            recording: true
        })
        
    }

    useEffect(() => {
        if(user.recording){
            localStorage.setItem('logeo', JSON.stringify(user))
        }
    },[user])
    

    return(
        <LoginContext.Provider value={{user, login, logout, usuarios}}>
            {children}
        </LoginContext.Provider>
    )
}