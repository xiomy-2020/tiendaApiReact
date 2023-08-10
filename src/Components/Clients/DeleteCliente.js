import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DeleteCliente = () =>{
    const {id}= useParams();
    useEffect(()=>{
        const url= `https://localhost:7100/api/Cliente?id=${id}`;
        axios.delete(url).then((resp)=>{
            console.log(resp);
        }).catch((e)=>console.log(e));
    });
    return (
        <>
        <div className="card text-center container col-sm-3">
        <h2>Cliente eliminado...</h2>
        <div className="form-button">
        <Link className="btn btn-outline-success m-2" to={'/clientes'}>Regresar</Link>
        </div>
        </div>
        </>
    );
}

export default DeleteCliente;