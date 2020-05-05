import React, { useState } from 'react'; 
import { UserProvider } from './UserContext' ;
import WelcomeContext from './WelcomeContext';
import CityName from './CityName';
function Container() {
    const [user, setUser] = useState({name: 'Leon', surName: 'Melamud', city: 'Ashkelon'});

    const providerOptions ={
    data: user,
    changeUser: (value) => setUser(value),
    }       

return (
    <div>
        <UserProvider value={providerOptions}> 
        <WelcomeContext />
        <CityName/>
        </UserProvider> </div>
); 
}
export default Container;