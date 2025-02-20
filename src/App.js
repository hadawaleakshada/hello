import { useState } from "react";

function App() {
    
    let [number, setNumber] = useState(" ")
    function setInput(event){
    setNumber(event.target.value);
    }
        function checkTheEvenOdd() {

            if (number % 2 == 0) {
                setNumber(number + "is even");

            }
            else {
                setNumber(number + "is odd");

            }


        }
    
    


    return (
        <div>
            <h1>{number}</h1>
            <input type="text" onChange={setInput} />
            <button onClick={checkTheEvenOdd}>check</button>
        </div>

    );
}

export default App;



