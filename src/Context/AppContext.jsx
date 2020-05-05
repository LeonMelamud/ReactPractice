import React from 'react';
import './App.css';
import { UserProvider } from './UserContext'
import WelcomeContext from './WelcomeContext'
function App() {
    const user = {
        name: 'Leon', surName: 'Melamud', city: 'Ashkelon'
};
return (
    <div className="App">
        <header className="App-header"> <UserProvider value={user}>
            <WelcomeContext />
</UserProvider> </header> </div>
);
}

export default App;