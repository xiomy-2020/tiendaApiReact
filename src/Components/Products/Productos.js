import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";
import Crear from "./Crear";

const Productos = () => {
    const [producto, setProducto] = useState([]);
    const [imageSrc,setImageSrc]= useState(null);
    const urlProducto = `https://localhost:7100/Api/Producto`; 

    useEffect(() => {       
           getProductos(); 
    }, []);  
    const getProductos = () =>{
        axios.get(urlProducto).then((resp)=>{
            setProducto(resp.data);
        }).catch((e)=>console.log(e))
    }
    producto.sort((a,b)=>a.nombre.localeCompare(b.nombre))
   
    return (        
        <>
        
        <h2 className="text-center"></h2>
        <section class="pt-4">
      <div class="container px-lg-5">          
          <div class="row gx-lg-5">
              <div class="container col-lg-10 col-xxl-4 mb-5">
                  <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                            <i class="bi bi-collection"></i></div>
                          <h2 class="fs-4 fw-bold">Productos</h2>                          
                          <tbody className="col-12">
                          <div className="m-2 text-start"> 
                            <Link className="btn btn-primary" to={`crear`}>Crear</Link>  
                          </div> 
                          <table id="tabla" className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Proveedor</th>
                                    <th>Cantidad</th>
                                    <th>Imagen Del Producto</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>               
                        {producto.map(p => {
                            return (                                     
                                    <tr key={p.id}>
                                    {<td>{p.id}</td>}
                                    <td>{p.nombre}</td>
                                    <td>{p.proveedor.nombreProveedor}</td>
                                    <td>{p.cantidad}</td>                                   
                                    <td className="">
                                    <img className="rounded" src={"https://localhost:7100"+p.imagenProducto} alt="Imagen" id="imagen"/>                        
                                    </td>
                                    
                                    <td className="text-end">
                                    <Link className="btn btn-outline-primary m-2" to={`detalles/${p.id}`}>Detalles</Link> 
                                    <Link className="btn btn-outline-warning m-2" to={`update/${p.id}`}>Actualizar</Link>
                                    <Link className="btn btn-outline-danger m-2" to={`delete/${p.id}`}>Eliminar</Link>
                                    </td>
                                    </tr>                                
                                    );
                                })}
                        </table>
                    </tbody>
                          
                      </div>
                  </div>
                </div>
                </div>
             </div>
        </section>
        </>

    );
}
export default Productos;