import axios from "axios";
import React, {  useEffect, useState } from "react";

const CrearVenta = ()=>{
    const [venta,setVenta]= useState([]);
    const [productos,setProductos]= useState([]);
    const [producto,setProducto]= useState([]);
    const [cliente,setCliente]= useState('');
    const [clientes,setClientes]= useState([]);
    const [cantidad,setCantidad]= useState('');
    
    const getProducts = async ()=>{
        await axios.get(`https://localhost:7100/Api/Producto`)
        .then((respuesta)=>{
            const listaProductos=respuesta.data;
            setProductos(listaProductos);
             console.log("Productos",listaProductos); 
        }
        ).catch((e)=> console.log(e));  
    };
    const getClients = async () =>{
        await axios.get(`https://localhost:7100/Api/Cliente`)   
        .then((respuesta)=>{
            const listaClientes=respuesta.data;
            setClientes(listaClientes);
             console.log("Clientes",listaClientes); 
        }
        ).catch((e)=> console.log(e));
    }      
    useEffect(()=>{ 
             getProducts();
             getClients(); 
   },[]);

    const crearVenta = (e)=>{        
        const url = `https://localhost:7100/api/Venta`;
        console.log(producto);
        const productosIds = producto.map(p =>parseInt(p,10));
        console.log("IDs:", productosIds);
        const data = {
            productoId:producto.map(p=>parseInt(p,10)),
            clienteId:parseInt(cliente),
            cantidad:parseInt(cantidad),
        }
        console.log("Datos antes",data);      
        axios.post(url,data)
        .then((respuesta)=>{
            console.log(respuesta); 
            setVenta(respuesta)
            console.log(" Datos actualizados ",venta); 
            respuesta.status === 200 ? window.location.href = '/ventas': console.log(respuesta.error)
        }).catch((e)=>console.log(e));
    };
    
    
    return(
        <>
        <div className="card container text-center col-sm-6 ">
            <div className="card-header">
                <h3>Crear Venta</h3>
            </div>
            <div className="card-body">
                <select className="form-control m-2" name="producto" value={producto} onChange={e=>setProducto(Array.from(e.target.selectedOptions,option=>option.value))} id="producto"  multiple>
                    <option value="">{productos.length > 0 ? "Seleccione un producto" : "Cargando productos..."}  </option>
                {productos.map((product)=>(                                            
                        <option key={product.id} value={product.id}>{product.nombre} -  Proveedor: {product.proveedor.nombreProveedor}</option>                        
                    ))}
                </select>
                <select className="form-control m-2" name="cliente" id="cliente" value={cliente} onChange={e=>setCliente(e.target.value)}>
                <option value="">{clientes.length > 0 ? "Seleccione un cliente" : "Cargando clientes..."} </option>                    
                    {clientes.map((client)=>(
                        <option key={client.id} value={client.id}>{client.nombre}</option>
                        ))}
                </select>                
                <input className="form-control m-2" 
                placeholder="Cantidad"
                name="cantidad"
                value={cantidad}
                onChange={e=>setCantidad(e.target.value)}
                />                
                <input className="btn btn-primary m-2" onClick={(e)=>crearVenta(e.target.value)} value={"Crear"} type="submit"/>
            </div>
        </div> 
        </>
    );
}

export default CrearVenta;