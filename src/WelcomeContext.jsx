import React, { useContext } from 'react' 
import UserContext from './UserContext'
import Button from '@material-ui/core/Button';
function WelcomeContext() {
    const user = useContext(UserContext).data;
    const changeUser = useContext(UserContext).changeUser;
    const newUser = {
        name: 'Moshe', surName: 'Cohen', city: 'Bat-Yam'
    }
    function clickHandler() {
        changeUser(newUser);
    }
    return (
        <div>
            <h3>Hello, {user.name} {user.surName}!</h3>
            <button   onClick={clickHandler}>Load another user</button>
        </div>
);
}
export default WelcomeContext;