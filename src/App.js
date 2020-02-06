import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './components/villages/HomePage.js';
import ContactPage from './components/villages/ContactPage.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' component={HomePage} />
          <Route path ='/contact' component={ContactPage} />
        </div>
      </Router>
    )  
  }
}

export default App;