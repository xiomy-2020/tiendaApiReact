import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Proveedores = () =>{
    const [proveedor,setProveedor]=useState([]);
    const url =`https://localhost:7100/Api/Proveedor`;
    useEffect(()=>{
        axios.get(url).then((resp)=>{
            setProveedor(resp.data);
        }).catch((e)=>console.log(e));
    },[]);
    return (
        <>
        <div className="card text-center container col-sm-6">
            <div className="card-header">
                <h4>Proveedores</h4>
            </div>            
            <div className="text-center m-2">
                <Link className="btn btn-primary" to={`crearproveedor`}>Crear</Link>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody className="">
                    {proveedor.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td className="">{p.nombreProveedor}</td>
                            <td className="">
                                <Link className="btn btn-outline-primary m-2" to={`detallesproveedor/${p.id}`}>Detalles</Link>
                                <Link className="btn btn-outline-danger m-2" to={`eliminarproveedor/${p.id}`}>Eliminar</Link>
                            </td>
                        </tr>
                ))
                }
                </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Proveedores;