import React from 'react'
import Content from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import First from '../images/first.webp'
import Second from '../images/secod.jfif'
import Third from '../images/third.jpg'
import Categories from '../components/Categories'
import Bar from '../components/Bar'
import Slot from '../components/Slot'
import Menu from '../components/Menu'
import Contactuser from '../components/Contactuser'
import Sloted from '../components/Sloted'

function Contact() {
    return (
        <div>
          <Content />
          <Menu />
          <Contactuser />

          <div className="container-to">
                <div className="answer-section-header-to">
                <h1>Ask a question</h1>
                </div>
          </div>

          <Sloted />
          <Bar />

          <div className="container-to contactsec6-to">
            <div className="answer-section-header-to">
              <h1>Related Product</h1>
            </div>
          </div>

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
          
          <Footer />


        </div>
      );
}

export default Contact;