
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";

const App = () => {
  const[text,setText]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent text={text}>
          <Child setText={setText}/>
        </Parent>
    </div>
  )
}

export default App
