import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51Oqg2NSHOjhcLLUqN9UUWvzHgFcSDRkSkZ1sxYsp53TlGg075ylj4bQNrpFyxG3SnVk5lgYUEb5JLLZ7MNDzQbL100tQg9he3y');




function App(){
        
  /*const options = {
    //passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
 };*/
    
        return (
            <Router>
            <div>
                
           
            <Routes>


          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/payment" element={<><Header/><Elements stripe={stripePromise} ><Payment/></Elements></>}>
          </Route>
            <Route path="/checkout" element={<><Header/><Checkout/></>}>
            
            </Route>
            
            <Route path="/" element={<><Header/><Home/></>}>
            </Route>
           
            
            </Routes>
            
            
            </div>
            </Router>
        )
}

export default App;