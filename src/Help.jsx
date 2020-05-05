import React from 'react';
import {useParams} from 'react-router-dom';
function Help() {
    let {id} =useParams();
    return (
    <div><h1>Help. the ID is {id}</h1></div>
);
}
export default Help;