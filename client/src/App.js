// import React, { Component } from 'react';
// import SideNav from './components/sideNav/sideNav'
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         < SideNav />
//       </div>
//     )
//   }
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn';
import FullSite from './Containers/Full'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route component={FullSite}/>
          {/* <Route exact path="/clients/:id" {Deatils} /> */}
        </Switch>
    </Router>
  );
      
}

export default App;
