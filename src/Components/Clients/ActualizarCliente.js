import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ActualizarCliente = () =>{
        const {id}= useParams();
        const [cliente,setCliente]= useState({});
        const [nombre,setNombre]= useState('');
        const [direccion,setDireccion]= useState('');
        const [telefono,setTelefono]= useState('');
        const url = `https://localhost:7100/api/Cliente/byid?id=${id}`;

        useEffect(()=>{
            axios.get(url).then((resp)=> {
                setCliente(resp.data);
                setNombre(resp.data.nombre);
                setDireccion(resp.data.direccion);
                setTelefono(resp.data.telefono);
            });
        },[id,url]);
      
        const UpdateCliente = () =>{
            const url = `https://localhost:7100/api/Cliente?id=${id}`;
            axios.put(url,{nombre,direccion,telefono})
            .then((res)=>{
                setCliente(res.data);
                res.status===200 ? window.location.href="/clientes":console.log("error",res.error);
            });
        }
    return (
        <>
        <div className="card container text-center col-sm-6">
            <div className="card-header">
                <h3>Actualizar Cliente</h3>
            </div>
            <div className="card-body">                
                <input name="nombre"
                        className="form-control m-2" 
                        value={nombre} 
                        onChange={(e)=>setNombre(e.target.value)}
                />    
                <input  name="direccion"
                        className="form-control m-2"
                        value={direccion} 
                        onChange={(e)=>setDireccion(e.target.value)}        
                />                   
                <input  name="telefono"
                        className="form-control m-2"
                        value={telefono}
                        onChange={(e)=>setTelefono(e.target.value)}        
                />         
                <button className="btn btn-primary" onClick={UpdateCliente} type="submit">Actualizar</button>
                
                
            </div>
        </div>
        </>
    );
}

export default ActualizarCliente;