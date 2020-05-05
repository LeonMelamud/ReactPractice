import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
function CounterHOC(props) {
   
    const [count, setCount] = useState(null);

    useEffect(() => {
        let counter;
         if (props.load) {
            counter = props.load('counter');
        }
        const initialCounter = Number(counter) || 0;
        setCount(initialCounter);
    },[]);
        
    function increaseHandler() {
        setCount(count + 1); 
        if (props.save) {
            props.save('counter', count + 1);
        }
    }
    function resetHandler() {
        setCount(0);
        if (props.clear) {
            props.clear();
        }
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={increaseHandler}>Increase</Button>
            <Button variant="contained" color="primary" onClick={resetHandler}>Reset</Button>
        <div>{count}</div> </div>
    ); 
}
export default CounterHOC;