import './App.css';
import Clientes from './Components/Clients/Clientes';
import Productos from './Components/Products/Productos';
import Ventas from './Components/Sells/Ventas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Detalles from './Components/Products/Detalles';
import Crear from './Components/Products/Crear';
import Delete from './Components/Products/Delete';
import Update from './Components/Products/Update';
import DetallesCliente from './Components/Clients/DetallesCliente';
import ActualizarCliente from './Components/Clients/ActualizarCliente';
import DeleteCliente from './Components/Clients/DeleteCliente';
import CrearCliente from './Components/Clients/CrearCliente';
import ActualizarVenta from './Components/Sells/ActualizarVenta';
import EliminarVenta from './Components/Sells/EliminarVenta';
import DetallesVenta from './Components/Sells/DetallesVenta';
import CrearVenta from './Components/Sells/CrearVenta';
import Proveedores from './Components/Proveed/Proveedores';
import DetallesProveedor from './Components/Proveed/DetallesProveedor';
import CrearProveedor from './Components/Proveed/CrearProveedor';
import EliminarProveedor from './Components/Proveed/EliminarProveedor';
import Inicio from './Components/Inicio';


const App =() => {
  return (
    <>
    
    <div className='card principal'>

    <Navbar/>
      <div className="card card-body">
        <BrowserRouter>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/proveedores"  element={<Proveedores />}/>
            <Route path="/proveedores/crearproveedor"  element={<CrearProveedor />}/>
            <Route path="/proveedores/detallesproveedor/:id"  element={<DetallesProveedor />}/>
            <Route path="/proveedores/eliminarproveedor/:id"  element={<EliminarProveedor />}/>
            {/* Rutas de los productos */}
            <Route path="/productos" element={<Productos />} />
            <Route path="productos/crear" element={<Crear/>}/>
            <Route path="/productos/detalles/:id" element={<Detalles />} />
            <Route path="productos/update/:id" element={<Update />} />
            <Route path="/productos/delete/:id" element={<Delete />} />
            {/* Rutas de los clientes */}
            <Route path="clientes" element={<Clientes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/clientes/crearcliente" element={<CrearCliente />} />
            <Route path="clientes/detallescliente/:id" element={<DetallesCliente />}/>
            <Route path="clientes/actualizarcliente/:id" element={<ActualizarCliente />}/>
            <Route path="clientes/deletecliente/:id" element={<DeleteCliente />} />
            {/* Rutas de las ventas */}
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/ventas/crearventa" element={<CrearVenta />} />
            <Route path="/ventas/detallesventa/:id" element={<DetallesVenta />} />
            <Route path="/ventas/actualizarventa/:id" element={<ActualizarVenta />} />
            <Route path="/ventas/eliminarventa/:id" element={<EliminarVenta />}/>

          </Routes>
        </BrowserRouter>

      </div>
      <footer>
      <div className='mb-0'>
            <footer className="py-1 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Mi tienda 2023</p></div>
            </footer>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
