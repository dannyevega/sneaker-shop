import React from 'react';
import CartItem from './CartItem';

const CartProducts = ({ value }) => {
  const { cart } = value;
  return (
    <div className='container-fluid'>
      {cart.map(sneaker => {
        return <CartItem key={sneaker.id} item={sneaker} value={value} />
      })}      
    </div>
  );
};

export default CartProducts;