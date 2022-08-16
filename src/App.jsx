import React, { useState } from "react";


const App = ()=>{
    const[count,setCount]=useState(0);
    const incnum=()=>{
        setCount(count + 1);
    }




    return(
        <>
            <h1>{count}</h1>
            <button onClick={incnum}>Click Me...😃</button>
        </>
    )
};
export default App;
