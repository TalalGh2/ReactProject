import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Welcome'>
        <p>Welcome to my clothing website</p>
        <hr style={{ width: "250px" }} />
    <Link to='/clothes'> <button className='start'>Get Started</button></Link>
      </div>
      <div className='brief'>
        <p>At our web site, we believe that fashion is a powerful form of self-expression. Our curated collection of clothing combines style, comfort, and quality to help you make a statement wherever you go. From casual wear to elegant pieces, our range is designed for every occasion and every individual.

Explore our latest trends, timeless classics, and sustainable options that reflect your unique style. Join us on this fashion journey and discover clothing that inspires confidence and creativity.

Shop now and redefine your wardrobe!</p>
      </div>
    </div>
  );
}

export default Home;
