import React from "react";
import './CartWidget.css';

function CartWidget (){
    return <div className="d-flex" >
    <i className="fa fa-cart-plus"></i>
    <span className="badge rounded-pill bg-light text-dark">1</span>

    </div>
}

export default CartWidget;