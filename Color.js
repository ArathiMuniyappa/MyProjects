import { useState } from "react"

 const Color=()=>{

    const [color , setColor]=useState("Black")
      return(

      <div>
        <h3>My Favorite color is {color}</h3>
        <button type="button" onClick={()=>setColor("Blue")}>Click</button>
      </div>
      )
 }

 export default Color