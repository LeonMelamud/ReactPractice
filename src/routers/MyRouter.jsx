import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Home from './Home';
import Help from './Help';
import About from './About';
import Images from './Images';
function MyRouter() 
{ 
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
            <li>
                <Link to="/" className="nav-link">Home</Link>{"  "}
            </li>
            <li>
                <Link to="/images/123/1212" className="nav-link">Images</Link>{"  "}
            </li>
            <li>
                <Link to="/about" className="nav-link">About</Link>{"  "}
            </li>
            <li>
                <Link to="/help/6382020" className="nav-link">Help</Link>{"  "}
            </li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/images/:imageId/:secImageId">
              <Images />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/help/:id">
              <Help />
            </Route>
          </Switch>
        </div>
      </Router>
    ); }
export default MyRouter;