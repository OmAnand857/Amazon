
import React, {useState,useEffect}from "react";
import {UserContext, Context} from "./Context";
import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./style/payment.css";
import axios from "./axios";
import CheckoutProduct from "./CheckoutProduct";

import {useStripe,useElements,CardElement,PaymentElement} from '@stripe/react-stripe-js';
const stripe =  require("stripe")('sk_test_51Oqg2NSHOjhcLLUqhXbsSVifJJPqH9hdiqiIN9EexqykH39N2Xshs6BhzKuR1C9Ns1Y1me21FioVjXAgm5d6LJM0003mB3SIMs');

function Payment(){

        const {helloUser}=useContext(UserContext);
        const {cart}=useContext(Context);
        const Navigate=useNavigate();

        let subtotal=0;
for(var i=0;i<cart.length;i++){
    subtotal=subtotal+cart[i].price;
}

        //const stripe = useStripe();
        const elements = useElements();

        const [clientSecret,setClientSecret]=useState(null);

        useEffect(()=>{
                        //generate the client secret that allows us to charge the customer
                        const getClientSecret=async ()=>{
                                        const response= await axios({
                                                method:'post',
                                                url:`/payments/create?total=${subtotal*100}`
})
                                        setClientSecret(response.data.clientSecret);
                                        console.log('yeh hai axios se respose',response);
                                }
                                
                                getClientSecret();
        },[cart,subtotal])

        const handleSubmit = async (event) => {
                // We don't want to let default form submission happen here,
                // which would refresh the page.
                event.preventDefault();
            
                
            
               
const paymentIntent = await stripe.paymentIntents.confirm(
        clientSecret,
        {
          payment_method: 'pm_card_visa',
          return_url: 'https://localhost:3000//',
        }
      ).then((paymentIntent)=>{
                        Navigate("/");
                });
            
              };












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
                        <form onSubmit={handleSubmit}>
                                  <CardElement/>
                                         <button disabled={!stripe}>Buy Now</button>
                        </form>
                        <strong>{subtotal}</strong>
                        </div>
                </div>
        </div>
        );
}

export default Payment;