import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallesCliente = () =>{
    const {id}= useParams();
    const[cliente,setCliente]= useState('');
    useEffect(()=>{
        const url =`https://localhost:7100/api/Cliente/byid?id=${id}`;
        axios.get(url).then((client)=>setCliente(client.data));        
    },[id]);    
    return (
        <>
        <div className="card container col-sm-4">
            <div className="card-header text-center"> 
                <h4>Detalles</h4>
            </div>
            <div className="card-body">
                {cliente ? (
                <div>
                    <p>{cliente.nombre}</p>
                    <p>{cliente.direccion}</p>
                    <p>{cliente.telefono}</p>
                    <div className="text-center">
                        <Link className="btn btn-outline-primary" to={'/clientes'}>Regresar</Link>
                    </div>
                </div>
                ):(
                <div>
                    <p>No elegiste bien.....</p>
                </div>
                )}
            </div>
        </div>
        </>
    );
}
export default DetallesCliente;