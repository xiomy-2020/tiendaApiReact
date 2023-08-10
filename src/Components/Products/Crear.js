import axios from "axios";
import React, { useEffect, useState } from "react";

const Crear=()=>{
     const [producto,setProducto]=useState({
        nombre:"",proveedor:"",cantidad:"",imagenProducto:""})
     const [nombre,setNombre]=useState('')
     const [proveedor,setProveedor]=useState([])
     const [proveedorSelect,setProveedorSelect]=useState('')
     const [cantidad,setCantidad]=useState('')     
     const [imagenProducto,setImagenProducto]=useState(null)     
     const [imagenUrl,setImagenUrl]=useState('')     
     
      useEffect(()=>{
         const url = `https://localhost:7100/Api/Proveedor`;
         axios.get(url).then((rsp)=>{
             setProveedor(rsp.data);
         }).catch((e)=>console.log(e));
     },[])

        const handleImageLoad = (event)=>{
           const file = event.target.files[0];
           setImagenProducto(file);
           const reader = new FileReader();
           reader.onload=()=>{
              const imageUrl= reader.result;
              setImagenUrl(imageUrl);
           }
           reader.readAsDataURL(file);
     }

    const handleChange = (event)=>{                         
        const url = 'https://localhost:7100/Api/Producto';
        const formData = new FormData();
        formData.append('Nombre',nombre);
        formData.append('ProveedorId',proveedorSelect);
        formData.append('Cantidad',cantidad);
        formData.append('ImagenProducto',imagenProducto);
        axios.post(url,formData)
        .then((resp)=>{
        setProducto({
            ...producto, 
            [event.target.name]:[event.target.value]
        })
         resp.status === 200 ? window.location.href = '/productos'
         : console.log(resp.error)}).catch((e)=>console.log(e))
         .catch((e)=>console.log("Error en la solicitud POST",e))         
         }
    return(
        <>
        <div className="card container col-sm-6 text-center">
           <h3 className="">Nuevo Producto</h3> 
            <div className="card-body">                                    
                <select className="form-control mb-2" value={proveedorSelect} onChange={e=>setProveedorSelect(e.target.value)}>
                    <option>{proveedor.length>0? "Selecciona el Proveedor": "Cargando...."}</option>
                    {proveedor.map(p=>(
                        <option key={p.id} value={p.id}>{p.nombreProveedor}</option>
                    ))}
                </select>
                <input 
                    className="form-control mb-2"
                    name="nombre" 
                    value={nombre} 
                    onChange={e=>setNombre(e.target.value)}
                    placeholder="Nombre"
                /> 
                 
                    <input type="number" 
                    id="cantidad" 
                    className="form-control mb-2"
                    value={cantidad} 
                    onChange={(e)=>setCantidad(e.target.value)}
                    placeholder="Cantidad"
                    />   
                    <input type="file"
                    id="imagenProducto"                    
                    onChange={handleImageLoad}
                    /> 
                    <div className="mt-2">
                        <button className="btn btn-primary text-center" onClick={handleChange} type="submit">Crear</button>                
                    </div>
            </div>
        </div>
        </>
    );
}

export default Crear;