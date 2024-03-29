import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
