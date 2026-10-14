import React, { useContext } from 'react';
import CartContext from './CartContext';

function ProductItem({ itemId, itemName, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id: itemId, name: itemName, price });
  };

  return (
    <div>
      <p>{itemName}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAdd}>Ad to Car</button>
    </div>
  );
}

export default ProductItem;
