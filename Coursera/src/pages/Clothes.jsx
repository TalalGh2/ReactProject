import React from 'react';
import Header from '../components/Header';
import ClothesCard from '../components/ClothesCard';
import '../App.css';
import Tshirt from '../images/T-Shirt.webp';
import trouser from '../images/trouser.jpg';
import shoe from '../images/redShoe.avif';
import jacket from '../images/jacket.webp';

const Clothes = () => {
  return (
    <div>
      <Header />
      <div className='Home'>
        <div className='container'>
          <ClothesCard img={shoe} name={"Red Shoe"} price={22} id={1} />
          <ClothesCard img={jacket} name={"Jacket"} price={19} id={2} />
          <ClothesCard img={Tshirt} name={"T-Shirt"} price={15} id={3} />
          <ClothesCard img={trouser} name={"Trouser"} price={17} id={4} />
        </div>
      </div>
    </div>
  );
}

export default Clothes;
