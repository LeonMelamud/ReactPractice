import React, { useState, useEffect} from 'react';
import './Counter.css';

function Counter(props) {
    const [playNumber, setPlayNumber] = useState(props.num);
    

function upNumber() {
    setPlayNumber(playNumber + 1);
}
        function downNumber() {
        setPlayNumber(playNumber - 1);
        }
    function restNumber() {
        setPlayNumber(0);
    }
    useEffect(() => 
        console.log('Only num were re renderd!')
            , [playNumber]
    )
    return (
        <div>
           <div>{playNumber}</div> 
            <button className = "red"  onClick={upNumber}> up number </button>
            <button className = "green" onClick={downNumber}> down number </button>
             <button className = "yellow" onClick={restNumber}>rest Number  </button>
        </div>

    );

}
export default Counter;