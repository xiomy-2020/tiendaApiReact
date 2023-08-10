import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActualizarVenta = () =>{
    const {id}=useParams();
    const [venta,setVenta]= useState({});
    const [cliente,setCliente]=useState('');
    const [clientes,setClientes]=useState([]);
    const [producto,setProducto]=useState('');
    const [productos,setProductos]=useState([]);
    const [cantidad,setCantidadV]=useState("");
    const url = `https://localhost:7100/api/Venta?id=${id}`;
    const urlClientes = `https://localhost:7100/api/Cliente`;
    const urlProductos = `https://localhost:7100/api/Producto`;

    useEffect(()=>{
        getVenta();
    },[]);

    const getVenta=(id)=>{
        getProductos();
        axios.get(url).then((respuesta)=>{
            const ventaActual= respuesta.data.find((v)=>v.id===parseInt(id));
            if(ventaActual){

                setVenta(ventaActual);
                console.log("Datos Actuales",respuesta.data[0]);
                setCliente(ventaActual.nombreCliente?.toString() || '');
                setProducto(ventaActual.nombreProducto.toString());
                setCantidadV(ventaActual.cantidad.toString());
            }else{
                console.log('No se encontro ninguna venta');
            }
        })
        getClientes(); 
    }
    
    const getClientes =()=>{
        axios.get(urlClientes).then((resp)=>{
            setClientes(resp.data);
            console.log("Clientes: ",resp.data);
        }).catch((e)=>console.log(e))
    }
    const getProductos =()=>{
        axios.get(urlProductos).then((resp)=>{
            setProductos(resp.data);
            console.log("Productos:",resp.data);
        }).catch((e)=>console.log(e))
    }    
    
   
    const actualizar=()=>{
        const ventaActualizada={
            nombreCliente:clientes,
            nombreProducto:productos,
            cantidad:cantidad,
        };
        axios.put(url,ventaActualizada)
        .then((resp)=>{
            console.log("Venta: ",resp)
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    return (
        <>
        <div className="container card col-sm-6 text-center">
            <div className="card-header">
                <h3>Actualizar Venta</h3>
            </div>
            <div className="card-body">
                    
                        <select className="form-control" name="cliente" value={cliente} onChange={(e)=>setCliente(e.target.value)}>
                        
                        {clientes.map((cliente)=>(
                            <option key={cliente.id} value={cliente.id}>{cliente.nombre}</option>

                        ))
                        }
                        </select>
                        
                    
                    <select className="form-control" value={producto} onChange={(e)=>setProducto(e.target.value)}>
                        {productos.map((producto)=>(
                            <option value={producto.id}>{producto.nombre}</option>
                        ))
                        }
                    </select>
                    <input className="form-control"
                        name="cantidad"
                        value={cantidad}
                        onChange={(e)=>setCantidadV(e.target.value)}
                    />
                    <input className="btn btn-outline-primary m-2" type="submit" onClick={actualizar} value={'Actualizar'}/>
            </div>
        </div>
        </>
    );
}

export default ActualizarVenta;