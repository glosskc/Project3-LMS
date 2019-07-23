import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import ClientList from './clientList'
import InputForm from '../containers/InputForm'

class Clients extends Component {
  render() {

    const styles = {
      containerSpacing: {
        margin: "10px 5px 10px 10px",
        boxShadow: "2px 3px 3px 0px rgba(165,165,165,1)",
        height: "88vh"
      },
      containerTwoSpacing: {
        margin: "10px 10px 10px 5px",
        boxShadow: "2px 3px 3px 0px rgba(165,165,165,1)",
        backgroundColor: '#feffff'
      },
      buttonPadding: {
        paddingBottom: 10,
        backgroundColor: "#98dafc"
      }
    }

    console.log("props on app: ", this.props)
    return (
      <div>
        <div className="container" style={styles.buttonPadding}>
            <div className="flex-item-app" style={styles.containerSpacing}>
              <h2>Add a client</h2>
              <InputForm />
            </div>
            <div className="flex-item-app" style={styles.containerTwoSpacing}>
              <h2>View Your Clients</h2>
              <ClientList dispatch={this.props.dispatch} clients={this.props.clients.all}/>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state: ", state);
  return state;
}

export default connect(mapStateToProps)(Clients)