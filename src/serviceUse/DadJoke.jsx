import React, { useState, useEffect } from 'react';
import getDadJoke from '../services/dadJokesService';

function DadJoke(){
    const [joke,setJoke] =useState('Joke Loading....');

    useEffect(getJoke,[]);

    function getJoke(){
        getDadJoke().then((joke) =>{setJoke(joke);});

    }

    return (
<div>
    {joke}
</div>

    );

}
export default DadJoke;