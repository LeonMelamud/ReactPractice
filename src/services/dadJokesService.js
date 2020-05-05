
export default function getDadJoke(){
    return fetch(`https://icanhazdadjoke.com`, {
            headers: {
            'Accept': 'application/json'
            }}
        )
    .then((response => {return response.json()}))
    .then((jsonObject)=>{return jsonObject.joke});


}