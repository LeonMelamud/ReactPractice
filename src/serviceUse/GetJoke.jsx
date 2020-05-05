import React, { useState, useEffect } from 'react' 
function GetJoke() {
const [joke, setJoke] = useState('Joke is loading...');
function getJoke() {
fetch('https://api.chucknorris.io/jokes/random', {})
.then((response) => {return response.json()})
.then((jsonObject) => { setJoke(jsonObject.value)})

}
useEffect(getJoke , [])
  return (
    <div>
{joke} </div>
); }
export default GetJoke;