import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn';
import FullSite from './Containers/FullSite'

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
