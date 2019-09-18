import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './login';
import Friendlist from './friendList';

function App() {

  return (
    <div className="App">
      <h1>The Authentic Friendly Database</h1>
          <Router>
        <h2>Login</h2>
          <Login/>
          <div>
        <Link to='/protected'>Login</Link>
        </div>     

        <div>
          <Route exact path='/protected' component={Friendlist} />
        </div>
        <div>
          
        </div>

          </Router>
      
    </div>
  );
}

export default App;
