import React from 'react';

const Item = ({name, price, imgSrc}) => {
    return (
        <div className="card" style={{width: "100%"}}>
            <img className="card-img-top" src={imgSrc} alt="Meal" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <div className='d-flex justify-content-between'>
                    <button className="btn btn-outline-primary" style={{width: "48%"}}>
                        Units: 1
                    </button>
                    <button className="btn btn-primary" style={{width: "48%"}}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Item;