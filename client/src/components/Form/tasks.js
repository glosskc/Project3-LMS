import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import TaskForm from './taskForm'
import TaskList from './TaskList'
// import TaskForm from '../containers/TaskForm'

export default class Tasks extends Component {
  render() {

    const styles = {
      containerSpacing: {
        margin: "10px 5px 10px 10px",
        backgroundColor: "#98dafc",
        height: "90vh",
        boxShadow: "2px 3px 3px 0px rgba(165,165,165,1)",


      },
      containerTwoSpacing: {
        margin: "0px 5px 10px 10px",
        boxShadow: "2px 3px 3px 0px rgba(165,165,165,1)",

      },
      buttonPadding: {
        paddingBottom: 10,
        backgroundColor: "#98dafc"
      }
    }

    console.log("props on app: ", this.props)
    return (
      <div style={styles.containerSpacing}>
        <div className="container" style={styles.containerSpacing}>
            <div className="flex-item-app">
              <h2>Add a task</h2>
              <TaskForm />
            </div>
            <div className="flex-item-app" style={styles.containerTwoSpacing}>
              <h2>View Your Tasks</h2>
              <TaskList List dispatch={this.props.dispatch} tasks={this.props.tasks.all}/>
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

export default connect(mapStateToProps)(Tasks)