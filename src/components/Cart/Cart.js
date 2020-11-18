import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className = 'cart'>
            <p>Course Added: {cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;