import React from "react";
import {UserContext, Context} from "./Context";
import {useContext} from "react";
import "./style/payment.css";
import CheckoutProduct from "./CheckoutProduct";

function Payment(){
        const {helloUser}=useContext(UserContext);
        const {cart}=useContext(Context);
        return (
        <div className="payment_page">
                <div className="payment_section">
                        <div className="payment_title">
                                <h3>Delivery Address</h3>
                        </div>
                        <div className="delivery-address">
                                <p>{helloUser}</p>
                                <p>Kankar Bagh</p>
                                <p>Delhi , 34273</p>
                        </div>
                </div>
                <div className="payment_section">
                        <div className="payment-title">
                        <h3>Review Items & Delivery</h3>
                        </div>
                        <div className="payment_items">
                        {
                                cart.map(item=><CheckoutProduct
                                image={item.image}
                                title={item.title}
                                id={item.id}
                                rating={item.rating}
                                price={item.price}
                                />
                                )
                        }
                        </div>

                </div>
                <div className="payment_section">
                        <div className="payment_title">
                                <h3>Payment Method</h3>
                        </div>
                        <div className="payment_method">

                        </div>
                </div>
        </div>
        );
}

export default Payment;