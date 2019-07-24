import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';


import MenuItem from 'material-ui/lib/menus/menu-item';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import LeftNav from 'material-ui/lib/left-nav';




// import ClientList from './clientList'
import ClientList from './clientList'
import InputForms from '../containers/InputForms'


import InputForm from '../containers/InputForm'
import TaskForm from '../../containers/taskForm'
import TaskList from './TaskList'

injectTapEventPlugin();

 class App extends Component {

  handleToggle = () => this.setState({open: !this.props.open});

  render() {

    const styles = {
      toolbarTitle: {
        paddingLeft: 30,

      },
      leftBar: {
        width: '17%',
        backgroundColor: '#312c32',
      },
      toolbarStyle: {
        backgroundColor: "#daad86",
      },
      menuItem: {
        color: "#feffff"
      }
    }

    console.log("props on app: ", this.props)
    return (
      <div>
        <div className="container">
          <Toolbar style={styles.toolbarStyle}>
            <ToolbarGroup firstChild={true} float="left">
              <ToolbarTitle text="ReactReduxCRM" style={styles.toolbarTitle}/>
            </ToolbarGroup>
            <ToolbarGroup float="right">
            </ToolbarGroup>
          </Toolbar>
        </div>
        <LeftNav open={this.props.open} style={styles.leftBar}>
          <MenuItem
            value={1}
            primaryText="Clients"
            linkButton
            containerElement={<Link to="/" />}
            style={styles.menuItem}
          />
          <MenuItem
            primaryText="Tasks"
            linkButton
            containerElement={<Link to="/tasks" />}
            style={styles.menuItem}
          />
        {/* <img className="logoImage" src="../../reactlogojohn.png" /> */}
        </LeftNav>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state: ", state);
  return state;
}

export default connect(mapStateToProps)(App)