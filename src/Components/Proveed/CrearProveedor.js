import axios from "axios";
import React, { useState } from "react";

const CrearProveedor = ()=>{
    const [nombre,setNombre]= useState("");    
 
    const url = `https://localhost:7100/Api/Proveedor`;

    const handleCrear=(e)=>{
        axios.post(url,{ nombre:nombre}).then((resp)=>{                    
            console.log(resp);
            resp.status===200 ? window.location.href="/proveedores" : console.log(resp.error);
        }).catch((e)=>console.log(e),console.log(e.nombre))
    }
    return(
        <>
        <div className="card container col-sm-6 text-center">
            <div className="card-header">
                <h3>Crear Proveedor</h3>
            </div>
            <div className="card-body">
                <input key={nombre.id} placeholder="Nombre de Proveedor" 
                className="form-control" name="nombre" 
                value={nombre} 
                onChange={(e)=>setNombre(e.target.value)}/>
                <div className="m-2" >
                    <button className="btn btn-primary" onClick={handleCrear} type="submit">Crear</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default CrearProveedor;