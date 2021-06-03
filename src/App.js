import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/team' component={About} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
