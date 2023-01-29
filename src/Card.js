import React from 'react';
import "./CardStyle.css";

function Card(props) {
    return (<div>
        {/* <div classname="container"> */}
        <div style={{"height":'100vh', "max-width": "100vw !important","align-items": "center"  }}>
            <div classname="product-card">
                <div classname="product-image">
                    <div><img src={props.image} /></div>
                </div>
                <div classname="product-detail">
                    <div classname="product-price-tag">
                        <div classname="product-name">
                            <h4 classname="m-0 p-0">{props.pID}</h4>
                            <small classname="text-muted m-0 p-0">{props.pName}</small>
                        </div>
                        <div classname="product-price">
                            <h5>$850</h5>
                        </div>
                    </div>
                    <div classname="product-size-color row mt-3">
                        <div classname="product-size col-6">
                            <div classname="text">
                                <h5>Size</h5>
                                <p>Size Chart</p>
                            </div>
                            <div classname="sizes">
                                <div classname="size-square">
                                    <span>8</span>
                                </div>
                                <div classname="size-square">
                                    <span>9</span>
                                </div>
                                <div classname="size-square">
                                    <span>10</span>
                                </div>
                                <div classname="size-square">
                                    <span>11</span>
                                </div>
                            </div>
                        </div>
                        <div classname="product-colors col-6">
                            <div classname="text">
                                <h5>Color</h5>
                            </div>
                            <div classname="colors">
                                <div classname="color-round color-red" />
                                <div classname="color-round color-blue" />
                                <div classname="color-round color-black" />
                                <div classname="color-round color-orange" />
                            </div>
                        </div>
                    </div>
                    <div classname="cta row">
                        <button classname="btn btn-primary col-6 btn-cart">Add to Card</button>
                        <button classname="btn btn-primary col-6 btn-buy">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <h1 className='card'>{image}
        //  {desc} {price}</h1>
    )
}

export default Card;