import React from 'react';
import Card from '../components/Card';
// import First from '../images/first.webp'
// import Second from '../images/secod.jfif'
// import Third from '../images/third.jpg'
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Bar from '../components/Bar';
import Slot from '../components/Slot';

const Home = () =>{
  return (
    <div>
      <div>
        <Hero />
        <Categories />
      </div>
      <div className="box-flex-to container-to">
        <Card
        // img = {First}
        title= "MORBIUS"
        gerne = "horror"
        btn = ".btn-horror"/>
        <Card
        // img = {Second}
        title= "BATMAN"
        gerne = "scifi"
        btn = ".btn-scifi"/>
        <Card
        // img = {Third}
        title= "ADAM'S PROJECT"
        gerne = "fatasy"
        btn =  ".btn-fatasy"/>
        <Card
        // img = {Third}
        title= "ADAM'S PROJECT"
        gerne = "fatasy"
        btn =  ".btn-fatasy"/>
      </div>
      <div>
        <Bar />
        <Slot />
      </div>
    </div>
  );
};

export default Home;
