import { useEffect } from "react"
import { useState } from "react"

function App() {

  let [title,setTitle]=useState("hi")
  let[name,setName]=useState("")

  useEffect(()=>{
    if (!name) {
      document.title="welcome"
    }else{
      document.title=`${name} ${title}`
    }
  },[title,name])
  return (
    <><p>hi</p>
    <input type="text"
    value={title}
    onChange={(e)=>setTitle(e.target.value)} />
    <input type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    </>
    
  )
}
export default App