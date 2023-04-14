import { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection, where, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

export const UseApiContext = createContext();

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const ApiContext = ({ children }) => {
    


    const searchCollections = async (nameCollection) => {
        // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTOS OBJETOS DE LA BASE DE DATOS.
        const collectionsData = await getDocs(query(collection(db, nameCollection)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return collections;
    };

    const collectionByParam = async (nameCollection, param, type) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
        const collectionsData = await getDocs(query(collection(db, nameCollection), where()));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return collections;
    };

    const getUser = async(idUser) => {
        // OBTENER UN USUARIO DE FIREBASE 
        const users = await searchCollections("usuarios")
        return(users.filter(user=>user.id===idUser))
    }

    const addUser = async(newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const user = await addDoc(collection(db, "usuarios"), newUser);
        return(user)
    }

    // PARAMETROS QUE DEBE TENER EL DOCUMENTO "USER"
    // usuarioEjemplo={
    //     email:"",
    //     contrasena:"",
    // }

    const emailJS = async (data)=>{
        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }

// TEMPLATE NUEVO template_4x0n3pa
        // const array= {
        //     id:"",
        //     toMail:""
        // }

        emailjs.send('', '', data, "")
            .then(function(response) {
                console.log(response)
            return(true)
            }, function(error) {
                console.log(error)
            return(false)
        });
    }

    return (
        <UseApiContext.Provider value={{ searchCollections, collectionByParam, getUser, addUser, emailJS }}>
            {children}
        </UseApiContext.Provider>
    );
};
