import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallesProveedor = () =>{
    const {id}= useParams();
    const [proveedor,setProveedor]= useState([]);
    const url = `https://localhost:7100/Api/Proveedor/${id}`;

    useEffect(()=>{
        axios.get(url).then((resp)=>{
            setProveedor(resp.data[0]);
        });
    },[]);

    return (
        <>
        <div className="container card col-sm-4 text-center">
            <div className="card-header">
                <h3>Detalle Proveedor</h3>
            </div>
            <div className="card-body text-center">
                <p>ID: <strong>{proveedor.id}</strong>
                -<strong> {proveedor.nombreProveedor}</strong></p>
                <div className="text-center">
                    <Link className="btn btn-primary" to={'/proveedores'}>Regresar</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetallesProveedor;