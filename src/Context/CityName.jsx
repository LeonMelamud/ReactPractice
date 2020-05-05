import React, { useContext } from 'react' 
import UserContext from './UserContext'
function CityName() {
    const user = useContext(UserContext).data;
    return (
        <div>
            <h2>You are from {user.city} </h2> </div>
);
}
export default CityName;