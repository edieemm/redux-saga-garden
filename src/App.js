import React from 'react';
import Garden from './components/Garden/Garden';
import Details from './components/Details/Details'
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to your garden!</h1>
    </header>
    <Router>
      <Route path='/' exact component={Garden} />
      <Route path='/:id' component={Details} />
    </Router>
  </div>
);

export default App;