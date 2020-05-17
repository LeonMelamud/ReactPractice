import React from 'react';
import * as actions from "./actions";
import { useDispatch, useSelector } from "react-redux";

export default () => {
       
        const counter = useSelector((state) => state.counterReducer);
        const dispatch = useDispatch();
    return (
       <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(actions.increment(5))}>+</button>
        <button onClick={() => dispatch(actions.decrement())}>-</button>
        <span>
          <button onClick={() => dispatch(actions.reset())}>RESET</button>
        </span>
      </div> 
    );
}
