import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({productos}) => {

    const [count, setCount] = useState(0);

    const addItem = () => count >= 0 && count < productos ? setCount(count + 1) : null;
    const removeItem = () => count > 0 ? setCount(count - 1) : null;

    return (
        <>
            <div className="countContainer">
                <button className="fa-solid fa-plus" onClick={addItem}></button>
                <h3>{count}</h3>
                <button className="fa-solid fa-minus"  onClick={removeItem}></button>
            </div>
            <div className="agregarCarrito">
                <p>Agregar a carrito</p>
            </div>
        </>
    )
}

export default ItemCount
