import React, { useState } from 'react';

function CountDown(props) {
    
    const [count, setCount] = useState(props.count);

    function countUp(e) {
        if (count > 0) {
            setCount(count - 1);
        }
        console.log(`sent form onClick`+ e.target.value);
    }
    return (<div>
        <span>Count : {count}</span> <button onClick={e => countUp(e)}
            onMouseEnter={e => console.log(e)}>Click Me To Count down </button>
    </div>);
}
export default CountDown;