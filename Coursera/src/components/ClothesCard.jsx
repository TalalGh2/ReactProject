import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const ClothesCard = ({ img, name, price, id }) => {
    const { cartItems, addToCart } = useContext(CartContext);
    const isAdded = cartItems.some(item => item.id === id);

    const handleButtonClick = () => {
        if (!isAdded) {
            addToCart({ id, img, name, price, quantity: 1 });
        }
    };

    return (
        <div className='Card'>
            <div><label>{name}</label></div>
            <div>
                <img src={img} alt='' style={{ width: "60%", marginTop: "20px", marginLeft: "60px" }} />
            </div>
            <div style={{ margin: "5px" }}>
                {`${price}$`}
            </div>
            {!isAdded ? (
                <button onClick={handleButtonClick} className='AddToCartBtn'>Add to cart</button>
            ) : (
                <button className='Added'>Added to cart</button>
            )}
        </div>
    );
};

export default ClothesCard;
