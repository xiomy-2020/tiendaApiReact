import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// console.log(proveedor.map((p)=>p.nombreProveedor));
//                             const proveedorVenta=proveedor.map(p=>p.nombreProveedor);

const Ventas = () => {    
    const [ventas, setVentas] = useState([]);
    const [proveedor, setProveedor] = useState([]);
    const [productos, setProductos] = useState([]);
    const urlProveedor=`https://localhost:7100/Api/Proveedor`;
    const urlProductos=`https://localhost:7100/Api/Producto`;
    const url= `https://localhost:7100/api/Venta`;
    

    useEffect(() => {        
             getVentas();
             getProveedor();   
             getProductos();         
    },[]);

    const getVentas=()=>{
        axios.get(url).then((v) => {
        setVentas(v.data);   
        }).catch((e)=>console.log(e));
    }
    const getProveedor = ()=>{
        axios.get(urlProveedor).then((resp)=>{
            setProveedor(resp.data);
        }).catch((e)=>console.log(e))        
    }
    const getProductos = () =>{
        axios.get(urlProductos)
        .then((resp)=>{
            setProductos(resp.data);
        }).catch((e)=>console.log(e))
    }
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <h4>Ventas</h4>
                </div>
                <div className="m-2">
                    <Link className="btn btn-primary" to={`crearventa`}>Crear</Link>
                </div>
                <div className="card-body">
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            {/* <th>Proveedor</th> */}
                            <th>Productos</th>
                            <th>Cliente</th>
                            <th>Cantidad</th>
                            <th>Numero de Compra</th>
                            <th>Acccion</th>
                        </tr>
                    </thead>
                        <tbody>
                            {ventas.map((vent)=>{ 
                                // console.log(vent);  
                                return(                            
                                <tr key={vent.id}>
                                    {/* <td>{vent.nombreProducto.map((nombreProd)=>{
                                            const product= proveedor.find((prod)=>prod.nombreProducto===nombreProd);
                                            console.log(nombreProd)
                                            return product ? product.nombreProveedor: "No se encontro ";
                                        })}</td> */}
                                     <td>{vent.nombreProducto}</td>
                                    <td>{vent.nombreCliente}</td>
                                    <td>{vent.cantidad}</td>
                                    <td>{vent.id}</td>
                                    <td className="m-2">
                                        <Link className="btn btn-outline-primary m-2" to={`detallesventa/${vent.id}`}>Detalles</Link>
                                        <Link className="btn btn-outline-warning m-2" to={`actualizarventa/${vent.id}`}>Actualizar</Link>
                                        <Link className="btn btn-outline-danger m-2" to={`eliminarventa/${vent.id}`}>Eliminar</Link>
                                    </td>
                                </tr>)
                            })}
                        </tbody>

                </table>
                    
                </div>
            </div>
        </>
    );
}

export default Ventas;