import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <ul>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/calander">Calander</Link></li>
          <li><Link to="/will-not-match">Will Not Match</Link></li>
          <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
        </ul>
      </div>
    </Router>
    )
  };
}

export default App