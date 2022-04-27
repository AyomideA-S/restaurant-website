import React from 'react';

export default function Footer() {
    return (
        <div>
            <div className="footer-to">
                <div className="container-to">
                    <div className="footer-flex-to">
                        <div className="contact-flex-to">
                            <h1 className="paint-to">Starterkit</h1>
                            <div className="btn-contact-to"></div>
                        </div>
                        <div className="footer-categories-flex-to">
                            <div className="footer-cat-to">
                                <h2>Contact</h2>
                                <p>+234 889 422 56</p>
                                <p>thisiscool@gmail.com</p>
                            </div>
                            <div className="footer-cat-to">
                                <h2>Address</h2>
                                <p>No 26 Alafia Estate Orogun</p>
                                <p>junction, Ibadan</p>
                                <p>Oyo State Nigeria</p>
                            </div>
                            <div className="footer-cat-to">
                                <h2>Subscribe to Newsletter</h2>
                                <form action="">
                                    <input type="text" name="" id="" placeholder="Email address" />
                                    <input type="submit" value="Subscribe" className="submit-to"/>
                                </form>
                                <p className="small-to">subscrip now for top norch content that will blow your mind</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <p className="align-to">Copyrigth  2020 <span className="paint-to">Thisiscool.com</span></p>
                </div>
            </div>
                
        </div>
    )
}