import React from 'react';
import Item from '../components/Item';
import Pizza from '../images/pizza.webp'
import Pie from '../images/pie.webp'
import Burger from '../images/burger.webp'
import Shawarma from '../images/shawarma.webp'

const Product = () =>{
  return (
    <div>
      <h3>Products</h3>
      <Item 
      imgSrc={Pizza}
      name="Pizza"
      price="#6,000"/><Item 
      imgSrc={Pie}
      name="Pie"
      price="#2,500"/><Item 
      imgSrc={Burger}
      name="Burger"
      price="#2,000"/><Item 
      imgSrc={Shawarma}
      name="Shawarma"
      price="#1,500"/>
    </div>
  );
};

export default Product;
