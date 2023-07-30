import React,{useState} from "react";


const Child=({setText})=>{
    
    return(
        <div>
            <h2>Child Component</h2>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default Child;