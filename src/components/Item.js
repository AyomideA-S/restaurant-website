import React from 'react';

const Item = ({name, price, imgSrc}) => {
    return (
        <div className="showcase-to section4-to" style={{width: "25%"}}>
            <div className="container-to box-flex-to">
                <div className="box-to">
                    <img className="card-img-top" src={imgSrc} alt="Meal" />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <div className="flex-gerne-to">
                        <button className="btn btn-outline-primary" style={{width: "48%"}}>
                            Units: 1
                        </button>
                        <button className="btn btn-primary" style={{width: "48%"}}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Item;