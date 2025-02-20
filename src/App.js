import { useState } from "react";

function App(){
    let[count,setCount]=useState(1);
    function checkTheCount(){
        setCount(count++)
        
    
    }


return(
    <div>
        <div>{count}</div>
        <button onClick={checkTheCount}>check</button>
        </div>

);
}
export default App;



