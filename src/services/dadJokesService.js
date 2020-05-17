
export default function getDadJoke(){
    console.log('check loop ');
    return fetch(`https://icanhazdadjoke.com`, {
            headers: {
            'Accept': 'application/json'
            }}
        )
    .then((response => {return response.json()}))
    .then((jsonObject)=>{return jsonObject.joke});


}