import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EliminarProveedor = ()=>{
    const {id}= useParams();
    const [proveedor,setProveedor]= useState('');

    const url = `https://localhost:7100/Api/Proveedor?id=${id}`;
    useEffect(()=>{
        axios.delete(url).then((resp)=>{
            setProveedor(resp);
            console.log(resp);
        }).catch((e)=>console.log(e))
    },[]);

    return(
        <>
        <div className="card container col-sm-4 text-center">            
                <h3>Eliminado Correctamente</h3>            
            <div className="m-2">
                <Link className="btn btn-primary" to={"/proveedores"}>Regresar</Link>
            </div>

        </div>
        </>
    );
}

export default EliminarProveedor;