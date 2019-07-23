import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeClient } from '../actions/actions';

import RaisedButton from 'material-ui/lib/raised-button';


class ClientList extends Component {

  render() {
    const styles = {
      listPadding: {
        padding: "0 20px 0 0"
      },
      listItem : {
        padding: "0 0 20px 20px",
        border: "1px solid black",
        listStyleType: 'none'
      },
      inputFields: {
        width: '45%',
        margin: "0 10px"
      },
      noteField: {
        width: '95%'
      },
      formStyle: {
        padding: 30
      }
    }
    console.log('this is props in ClientList: ', this.props);
    return (
      <ul style={styles.listPadding}>
        {
          this.props.clients.all.map((client, index) => {
            return (
              <div style={styles.formStyle}>
                <li key={client.id} style={styles.listItem}>
                  {/* <p>First name: {client.text.firstName}</p> */}
                  <p>Client Name: {client.text.clientName}</p>
                  <p>Task: {client.text.task}</p>
                  <p>Email: {client.text.email}</p>
                  <p>Phone: {client.text.phone}</p>
                  <p>Address: {client.text.address}</p>
                  <p>Notes: {client.text.notes}</p>
                  <RaisedButton label="Remove" style={styles.submitButton} onMouseDown={() => this.props.removeClient(index)} />
                </li>
              </div>

            )
          })
        }

      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  console.log('mapStateToProps', state)
  return state;
}

// Anything reutrned form this function will end up as props
// to all of our

function mapDispatchToProps(dispatch){

  return bindActionCreators({ removeClient }, dispatch)
}
// contact

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);