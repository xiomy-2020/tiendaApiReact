import React, { useEffect, useState } from "react";
import Ventas from "../Sells/Ventas";
import { Link } from "react-router-dom";

const Clientes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cliente, setCliente] = useState([]);
    useEffect(() => {
        if (isLoading) {
            fetch("https://localhost:7100/api/Cliente")
                .then((response) => response.json())
                .then((clientes) => {
                    setCliente(clientes);
                    setIsLoading(false);
                }).catch((e)=>console.log(e));
        }
    }, [isLoading]);

    return (
        <>
        
            <div className="card text-center">
                <div className="card-header">
                    <h4>Clientes</h4>
                </div>
                <div className="m-2">
                    <Link className="btn btn-primary" to={'crearcliente'}>Crear</Link>
                </div>
                <div className="card-body">
                <table id="tabla" className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody className="">                        
                            {cliente.map(c => (
                                <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.nombre}</td>
                                <td>{c.direccion}</td>
                                <td>{c.telefono}</td>
                                <td>                                    
                                    <Link className="btn btn-outline-primary m-2" to={`detallescliente/${c.id}`}>Detalles</Link>
                                    <Link className="btn btn-outline-secondary m-2" to={`actualizarcliente/${c.id}`}>Actualizar</Link>
                                    <Link className="btn btn-outline-danger" to={`deletecliente/${c.id}`}>Eliminar</Link>                                    
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
export default Clientes;