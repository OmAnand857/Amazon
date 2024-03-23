import React from "react";
import Counter from "./Counter";
import {useContext} from "react";
import {Value} from "./Context.js";
function App(){
    const item=useContext(Value);
    
    return (
        <div className="app">
       
        <h1>Count is {item.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        
        </div>
       
    );
};
export default App;