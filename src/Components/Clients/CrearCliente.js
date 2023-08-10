import axios from "axios";
import React, {  useState } from "react";

const CrearCliente = () =>{
    const[nombre,setNombre]=useState('');
    const[direccion,setDireccion]=useState('');
    const[telefono,setTelefono]=useState('');
    const[cliente,setCliente]= useState({
        nombre:"",
        direccion:"",
        telefono:""
    });
    const handleInput= (e)=>{
    const url= `https://localhost:7100/api/Cliente`;
    axios.post(url,{Nombre:nombre,Direccion:direccion,Telefono:telefono}).then((resp)=>{
        setCliente({
            ...cliente, [e.target.name]:[e.target.value]
        })
        resp.status===200 ? window.location.href='/clientes':console.log(resp.error);
    }).catch((e)=>console.log(e))}
    
    return(
        <>
        <div className="card text-center col-sm-6 container">
            <div className="card-header">
                <h2>Crear Cliente</h2>
            </div>
            <div className="card-body">
                <input 
                className="form-control m-2" 
                placeholder="Nombre"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}  
                name="nombre"/>
                <input 
                className="form-control m-2" 
                placeholder="Direccion" 
                value={direccion}
                onChange={e=>setDireccion(e.target.value)}
                name="direccion"/>
                <input 
                className="form-control m-2" 
                placeholder="Telefono" 
                value={telefono}
                onChange={e=>setTelefono(e.target.value)}
                name="telefono"/>
                <input type="submit" className="btn btn-primary m-2" onClick={e=>handleInput(e)}/>
            </div>
        </div>
        </>
    );
}
export default CrearCliente;