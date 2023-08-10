import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar =()=>{
    return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
            <a className="navbar-brand" href="/inicio">Tienda</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="/inicio">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Contactos</a></li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/productos">Productos <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/proveedores">Proveedores <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/clientes">Clientes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ventas">Ventas</a>
                  </li>     
                </ul>
              </div>
        </div>
      </nav>
      
    </> 
  );  
}
export default Navbar;