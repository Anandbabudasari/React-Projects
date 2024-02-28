import React,{ useState } from "react";

function Counter (){
     
    const [count, setCount] =  useState(0);

    const increment =  () => {

        setCount(count+1);
    }
    const decrement =  () => {

        setCount(count-1);
    }
    const reset =  () => {

        setCount(0);
    }

    return(<div className="counter-container">
            <p className="count-diplay">{count}</p>
            <button className="counter-button"onclick={decrement}>decrement</button>
            <button className="counter-button"onclick={reset}>reset</button>
            <button className="counter-button"onclick={increment}>increment</button>            
    </div>);

}

export default  counter;
