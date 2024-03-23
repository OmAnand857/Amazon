import React from "react";
import {useContext} from "react";
import {Value} from "./Context.js";
function Counter(){
    const item=useContext(Value);
    console.log(item);
    return (
            <div>
                <button onClick={()=>{item.setCount(item.count+1)}}>Increase</button>
                <button onClick={()=>{item.setCount(item.count-1)}}>Decrease</button>
            </div>

    );
};
export default Counter;