import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTask } from '../actions/actions';

import RaisedButton from 'material-ui/lib/raised-button';


class TaskList extends Component {

  render() {
    const styles = {
      listPadding: {
        padding: 0,
      },
      listItem : {
        padding: "0 0 20px 20px",
        border: "1px solid black",
        listStyleType: 'none'
      }
    }
    console.log('this is props in TL: ', this.props.tasks);
    return (
      <ul style={styles.listPadding}>
        {
          this.props.tasks.all.map((task, index) => {
            return (

              <li key={task.id} style={styles.listItem}>
                <p>Task Name: {task.text.taskName}</p>
                <p>Description: {task.text.description}</p>
                <p>Due Date: {task.text.dueDate}</p>
                <p>Start Date: {task.text.startDate}</p>
                <RaisedButton label="Remove" onMouseDown={() => this.props.removeTask(index)} />

              </li>

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
// to all of our reducers
function mapDispatchToProps(dispatch){

  return bindActionCreators({ removeTask }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);