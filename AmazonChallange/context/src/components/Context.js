import React , {createContext,useState} from "react";


export const Value=createContext(null);

export  const  ValueProvider=(props)=>{
    const [count,setCount]=useState(0);
  return   <Value.Provider value={{count,setCount}}>
        {props.children}
    </Value.Provider>
}