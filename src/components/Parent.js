import React from "react";

const Parent=(props)=>{

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            {props.children}
        </div>
    )
}

export default Parent;