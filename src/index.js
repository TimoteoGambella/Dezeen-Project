import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Swal.fire({
//   title: "¡HOLA! Para comprar, ingresá a tu cuenta.",
//   iconHtml: `<img src=${logo} alt="LOGO">`,
//   customClass: {
//     icon: 'no-border',
//     container:"popUpLoginAlert",
//     cancelButton:"popUpLoginCancel"
//   },
//   showCloseButton: true,
//   showCancelButton: true,
//   confirmButtonText: "INGRESAR",
//   cancelButtonText:"VOLVER"
// }).then((res)=>{
//   if(res.isConfirmed){
//     localStorage.setItem("redirectUrl", location);
//     navigate("/login");
//   }else{}
// })

// Swal.fire({
//   title: 'EL PRODUCTO NO EXISTE O NO SE ENCUENTRA EN STOCK',
//   icon: "info",
//   confirmButtonText: "CONTINUAR",
// }).then((res) => {
//   window.location.replace("https://www.miropero.ar");
// });