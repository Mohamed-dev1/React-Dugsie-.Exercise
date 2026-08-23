import { useState } from "react";

const Togglebutton=()=>{
    let[isoN ,setIsOn]=useState(true)


const togglle=()=>
    setIsOn(!isoN)
  
return(
    <>
    <p>the botton is{isoN?"ON":"OFF"}</p>
    <button onClick={togglle}>{isoN? "TURN OF":"TURN ON"}</button>
    </>
)
}

export default Togglebutton