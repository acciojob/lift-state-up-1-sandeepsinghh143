import React,{useState} from "react";


const Child=()=>{
    const[state,setState]=useState(false);
    function ShowModal(){
        if(state){
            setState(false);
        }else{
            setState(true);
        }
    }
    return(
        <div>
            <h2>Child Component</h2>
            <button onClick={ShowModal}>Show Modal</button>

            {state && 
            <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
            </div>}
        </div>
    )
}

export default Child;