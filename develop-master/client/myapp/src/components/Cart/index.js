import React  from "react";
import cart from '../../images/cart.svg'

const Cart = ({items}) =>{
    return(
        <div style={
            {
                display:'flex'
            }
        }>
        <img src={cart} alt="addtocart"/>
        <br/>
        <p>{items} items</p>
        </div>
    )
}

export default Cart