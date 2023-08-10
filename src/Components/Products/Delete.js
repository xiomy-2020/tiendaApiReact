import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Delete = ()=>{
    const {id} = useParams();     
    const [product,setProduct]= useState([]);

    useEffect(() =>{               
        axios.delete(`https://localhost:7100/Api/Producto?id=${id}`)
            .then((producto)=>
            {setProduct(producto);   
                console.log(product);          
        }).catch((e)=>console.log(e))
    },[])
    return(
        <>
        <div className="container card text-center col-sm-4">
            <h4>Producto Eliminado correctamente</h4>    
            <div className="m-2">
                <Link className="btn btn-outline-success text-black" to={`/productos`}>Regresar</Link>
            </div>
        </div>
        </>
    );
}
export default Delete;