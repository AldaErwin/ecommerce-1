import Navbar from "./components/Navbar/Navbar";
import './App.css';
import logo from './assets/logo192.png';
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {

    return (
        <>
            <Navbar logo={logo}>
                <CartWidget />
            </Navbar>
            
            <h2 className="tituloOfertas">Calzado masculino</h2>
            <div className="sectionCards">
                <ItemListContainer/>
            </div>
        </>
    )
}

export default App

// disparadores de re render - eventos,cambio de estado y cambio de props