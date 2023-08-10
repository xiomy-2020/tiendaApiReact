import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallesVenta = () =>{
    const {id} = useParams();
    const [venta,setVenta]= useState('');
    useEffect(()=>{
        const url= `https://localhost:7100/api/Venta/ById?id=${id}`;
        axios.get(url).then((resp)=>
        {
            setVenta(resp.data[0])
        });
    },[id]);
    
    return(
        <>
        <div className="card container text-center col-sm-4">
            <div className="card-header">
                <h3>Detalles de la venta</h3>
            </div>
            <div className="card-body">    
                {  
                venta ?(
                    <div className="text-start" key={venta.id}>
                    <p>Cliente :<strong> {venta.nombreCliente}</strong></p>
                    <p>{console.log(venta)}Producto :<strong>{venta.nombreProducto.join("-")} {console.log(venta)}</strong></p>
                    <p>Cantidad :<strong> {venta.cantidad}</strong></p>
                    <p>Numero de la compra :<strong>{id}</strong></p>
                    <div className="text-center">
                        <Link className="btn btn-outline-success" to={'/ventas'}>Regresar</Link>
                    </div>
                    </div>

                ):('Cargando Informacion...')}
            </div>
        </div>
        </>
    );
}

export default DetallesVenta;