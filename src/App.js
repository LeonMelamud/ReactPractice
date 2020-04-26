import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import TableViewer from './TableViewer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">    
    {/*<img src={logo} className="App-logo" alt="logo" />
           <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         >
            Learn React
        </a>
  */}   <ErrorBoundary>
          <TableViewer/>
      </ErrorBoundary>
      <img src={logo} className="App-logo" alt="logo" />
  </div>
  );
}

export default App;
