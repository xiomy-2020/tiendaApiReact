import axios from "axios";
 
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detalles = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [proveedor, setProveedor] = useState([]);
    const urlProducto =`https://localhost:7100/Api/Producto/${id}`; 
    const urlProveedor = `https://localhost:7100/Api/Proveedor`;
    useEffect(() => {
        getProducto();
        getProveedor();
    }, []);
    const getProducto = ()=>{
        axios.get(urlProducto).then((resp)=>{
            setProduct(resp.data[0]);
        }).catch((e)=>console.log(e))
    }
    const getProveedor = ()=>{
        axios.get(urlProveedor).then((resp)=>{
            setProveedor(resp.data[0]);
        }).catch((e)=>console.log(e))
    }
    
    return (
        <>  
         <h2 className="text-center mb-2">Detalles del Producto</h2>
          <div class="container col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-light border-0 h-100">
                      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
                          {product ? (
                    <div className="text-center" key={product.id}>
                        <div className="text-center m-2"></div>
                          <p class="mb-2"><img className="rounded" src={"https://localhost:7100"+product.imagenProducto} id="imagen"/></p>                        <div className="text-center">
                        <h2 class="fs-4 fw-bold">{product.nombre}</h2>
                        <p>Cantidad: {product.cantidad}</p>
                            <Link className="btn btn-primary" to={'/productos'}>Regresar</Link>
                        </div>
                    </div>
                ) : (
                    <p>Haz click en ver detalles para ver el detalle del producto</p>
                )
                }
                      </div>
                  </div>
              </div>       
        </>
    );
}

export default Detalles;