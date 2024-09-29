import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
// import App from './App.jsx'
// import { UserCard } from './components/usercard/UserCard'
// import "./components/usercard/index.css";
// import {UseStateCart} from './components/UseState/UseStateCart'
// import { USForm } from './components/UseState/USForm'
// import { FormUS } from './components/UseState/FormUS'
// import { Advice } from './components/Api/Advice'
import { QRcode } from "./components/QRCode/QRcode";
import "./components/QRCode/QRcode.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> 
    <UserCard/> 
    <UseStateCart/> 
    <USForm/>  
    <FormUS/> 
    <Advice/> */}
    <QRcode />
  </React.StrictMode>
);
