import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EliminarVenta = () =>{
    const {id}= useParams();
    const [venta,setVenta]=useState([]);

    useEffect(()=>{
        const url= `https://localhost:7100/api/Venta?id=${id}`;
        axios.delete(url).then((respuesta)=>setVenta(respuesta));
    },[id]);


    return(
        <>
            <div className="container card col-sm-6">
                <div className="card-header text-center">
                    <h3>Venta Eliminada Correctamente....</h3>
                </div>
                <div className="card-body">
                    <Link className="btn btn-primary" to={'/ventas'}>Regresar</Link>
                </div>
            </div>
        </>
    );
}
export default EliminarVenta;