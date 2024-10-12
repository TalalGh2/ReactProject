import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { CartContext } from '../CartContext'; 

const Header = () => {
  const { cartItems } = useContext(CartContext); 

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='Header'>
      <div className='headerElemnts'>
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/clothes">Clothes</Link></li>
          <li>
            <Link to="/cart">
              Cart <FaShoppingCart />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>} 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
