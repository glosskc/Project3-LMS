import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideNav from '../components/sideNav';
import Dashboard from "../pages/dashboard";
import MainCalendar from '../pages/MainCalendar';
import ClientServices from '../pages/clientSerives'


export default class FullSite extends Component {
    render(){
        return (
            <SideNav>
        
             <Router>
                <Switch>
                    <Route path="/app/calendar" name="Calendar" component={MainCalendar} />
                    <Route path="/app/dashboard" name="Dashboard" component={Dashboard} />
                    <Route path="/app/client" name="ClientServices" component={ClientServices} />
                    <Redirect from="/app" to="/app/dashboard"/>
                    {/* <Route exact path="/clients/:id" {Deatils} /> */}

                </Switch>     
            </Router> 
              
            
        </SideNav>
        
      );
    }
s
}