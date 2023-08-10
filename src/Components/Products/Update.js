import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Update = () =>{
    const {id}= useParams();
    const [producto,setProducto]= useState({});
    const [nombre,setNombre]= useState('');
    const [proveedor,setProveedor]= useState('');
    const [listaProveedor,setListaProveedores]= useState([]);
    const [cantidad,setCantidad]= useState('');
    const [imagen,setImagen]= useState('');
    const [imagenP,setImagenP]= useState('');
    const [imagenUrl,setImagenUrl]= useState('');
    const urlProveedor= `https://localhost:7100/Api/Proveedor`;

    useEffect(()=>{
        getProducto();
        },[]);

    const getProducto=()=>{
        getProveedor();
        const url= `https://localhost:7100/Api/Producto?id=${id}`;            
            axios.get(url).then((resp)=>{
            const product= resp.data.find((p)=>p.id===parseInt(id));
            setProducto(product);
            setNombre(product.nombre);
            setProveedor(product.proveedorId.toString());
            setCantidad(product.cantidad.toString());
            setImagen(product.imagenProducto.toString());
            console.log(resp.data[0]);
            });
        }
        const getProveedor = ()=>{
            axios.get(urlProveedor).then((resp)=>{
                setListaProveedores(resp.data);
                }).catch((e)=>console.log(e))
            }

        const UpdateProduct = ()=>{
            if (!imagen) {
                console.log("No se ha seleccionado ninguna imagen.",imagen);
                return;
              }
              const formData = new FormData();
              formData.append("nombre",nombre);
              formData.append("proveedorId",proveedor);
              formData.append("cantidad",cantidad);
              formData.append("imagenUrl",imagenP);
              const url= `https://localhost:7100/Api/Producto?id=${id}`;            
              axios.put(url,formData,{headers:{"Content-Type":"multipart/form-data"}})
              .then((resp)=>{
                  setProducto(resp.data);
                  console.log(resp.data);
                  console.log(formData);
                    resp.status===200 ? window.location.href='/productos' : console.log(resp.error);
                }).catch((e)=>console.log(e),console.log(producto));
            };

        const handleUpdateImageLoad = (event)=>{
            const file = event.target.files[0];
            setImagen(file);
            setImagenP(file);
            console.log(file);
            const reader = new FileReader();
            reader.onload=()=>{
               const imageUrl= reader.result;
               setImagenUrl(imageUrl);
            }
            reader.readAsDataURL(file);
            console.log(file);
      }

    return(
        <>
        <div className="card container col-sm-6">
            <div className="card-header">
                <h5>Actualizar Producto</h5>
            </div>
            <div key={id}>
                <input className="form-control mb-2"
                name="nombre"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div className="">
                <select className="form-control mb-2" name="producto" value={proveedor}  onChange={(e)=>setProveedor(e.target.value)}>
                <option value="">{}</option>
                {listaProveedor.map((proveedor)=>(
                   <option key={proveedor.id} value={proveedor.id}>{proveedor.nombreProveedor}</option>
                ))}
                </select>
            </div>
            <div>
                <input type="number" className="form-control mb-2"
                name="cantidad"
                 value={cantidad}
                 onChange={e=>setCantidad(e.target.value)}
                />
            </div>
            <div className="form-control mb-2 text-center col-sm-12" >
                <img
                id="imagen"
                className="rounded col-sm-12"
                name="imagen"
                 src={imagenUrl || ("https://localhost:7100"+ producto.imagenProducto)}
                 alt="Imagen del Producto..."
                 />
                 <div>
                    <div className="">
                       <input type="file" className="rounded col-sm-4 mt-2 btn btn-outline-light" onChange={handleUpdateImageLoad} />
                    </div>
                </div>
            </div>
            <div className="text-center m-2">
            <button className="btn btn-primary" onClick={UpdateProduct} type="submit" >Actualizar</button>
            </div>
        </div>
        </>
    );
}

export default Update;