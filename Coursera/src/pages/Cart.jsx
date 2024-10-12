// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Header from '../components/Header';
import '../App.css'; // Ensure this includes your styles

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleIncrement = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div>
            <Header />
            <div className='Home'>
                <div className='Cart'>
                    {cartItems.length === 0 ? (
                        <div className='empty-cart'>
                            <h2>Your cart is empty.</h2>
                            <p>Continue shopping or proceed to checkout.</p>
                        </div>
                    ) : (
                        <>
                            <h2>Your Cart</h2>
                            {cartItems.map(item => (
                                <div key={item.id} className='cart-item'>
                                    <img src={item.img} alt={item.name} className='cart-item-img' />
                                    <div className='cart-item-details'>
                                        <h3>{item.name}</h3>
                                        <p>{item.price}$ each</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total: {(item.price * item.quantity).toFixed(2)}$</p>
                                        <button onClick={() => handleDecrement(item)} className='quantity-btn'>-</button>
                                        <button onClick={() => handleIncrement(item)} className='quantity-btn'>+</button>
                                        <button onClick={() => removeFromCart(item.id)} className='remove-btn'>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className='total-price'>
                                <h3>Total Price: {totalPrice.toFixed(2)}$</h3>
                            </div>
                            <div className='checkout'>
                                <button className='checkout-btn'>Checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
