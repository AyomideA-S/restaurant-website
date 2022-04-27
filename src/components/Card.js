import React from 'react';
import Morbius from "../images/first.webp"
export default function Card(props) {
    return (
        <div>
                <div className="showcase-to section4-to">
                    <div className="container-to box-flex-to">
                        <div className="box-to">
                            <img src={props.img} alt=""/>
                            <h2>MORBIUS</h2>
                            <div className="flex-gerne-to">
                                <button className="btn-fantasy-to button-to">Fantasy</button>
                                <p>View: 23.7K</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}