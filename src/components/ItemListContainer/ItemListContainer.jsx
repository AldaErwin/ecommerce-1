import { useEffect, useState } from 'react';
import { getInfo } from '../Item/item';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getInfo()
      .then(res => setProductos(res));
  },[]);

  return (
    <>
      {
        productos.map(producto => {
          const {title,pictureUrl,price,id,description,stock} = producto;
          return (
            <div className='card' key={id}>
              <div className='cardInfo'>
                  <p className='productTitle'>{title}</p>
                  <div className='logo'>
                      <img src={pictureUrl} />
                  </div>
                  <p className='productPrice'><span>$</span>{price}</p>
                  <p className='productDescription'>{description}</p>
                  <p className='productStock'>Stock disponible: <span>{stock}</span></p>
              </div>
              <ItemCount productos={stock}/>
            </div>
          )
        })
      }
    </>
  )
}

export default ItemListContainer



// <div className='cardInfo'>
//                 <p>{producto.title}</p>
//                 <div className='logo'>
//                     <img src={producto.pictureUrl} />
//                 </div>
//                 <p>{producto.price}</p>
//             </div>