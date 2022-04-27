import React from 'react'
import Content from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import First from '../images/first.webp'
import Second from '../images/secod.jfif'
import Third from '../images/third.jpg'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Bar from '../components/Bar'
import Slot from '../components/Slot'

function Home() {
    return (
        <div>
          <Content />
          <Hero />
          <Categories />
          <div className='box-flex-to container-to'>
            <Card 
            img = {First}
            title= "MORBIUS"
            gerne = "horro"
            btn = ".btn-horro"/>
            <Card 
            img = {Second}
            title= "BATMAN"
            gerne = "scifi"
            btn = ".btn-scifi"/>
            <Card 
            img = {Third}
            title= "ADAM'S PROJECT"
            gerne = "fatasy"
            btn =  ".btn-fatasy"/>
            <Card 
            img = {Third}
            title= "ADAM'S PROJECT"
            gerne = "fatasy"
            btn =  ".btn-fatasy"/>
          </div>
          <Bar />
          <Slot />
          <Footer />
        </div>
      );
}

export default Home;