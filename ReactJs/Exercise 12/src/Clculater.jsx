import { useState } from "react";

const Calculater=()=>{
    const [cont,setCount]=useState(0)
    const increment=()=>setCount(cont+1)

    
        const decrement=()=>{
        if (cont>0) setCount(cont-1)
    }
    

    return(
        <>
        <h1>heyyy {cont}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}
export default Calculater;