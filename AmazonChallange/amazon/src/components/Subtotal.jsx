import React from "react";
import "./style/subtotal.css"
import { useContext } from "react";
import {Context} from "./Context";
import {useNavigate} from "react-router-dom";



function Subtotal(){
        const navigate=useNavigate();
const item=useContext(Context);
let subtotal=0;
for(var i=0;i<item.cart.length;i++){
    subtotal=subtotal+item.cart[i].price;
}

        return (
                <div className="Subtotal">
                        <h2>Subtotal({item.cart.length} items):<strong>INR {subtotal}</strong></h2>
                        <input type="checkbox" id="gift"/>
                        <lable for="gift">This item contains a gift</lable>
                        <button onClick={(e)=>{navigate("/payment")}} className="Subtotal_button">Proceed to checkout</button>
                </div>



        )


}
export default Subtotal;