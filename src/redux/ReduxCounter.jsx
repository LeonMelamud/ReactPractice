import React from 'react';
import { useSelector } from 'react-redux';
import CounterView from './CounterView';

export default function ReduxCounter(){
 const isLogged = useSelector((state) => state.idLogged);

    return <div>
        {isLogged ? (<CounterView />) : (<h2>you not log In</h2>)} </div>;


}
