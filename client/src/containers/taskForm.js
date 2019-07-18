import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


import { addTask } from '../actions/actions';

class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  onSubmit(props) {
    console.log('on submit task props: ', props)
    this.props.addTask(props)
  }

//   add client name to the fields
  render() {

    const { fields: {taskName, description, startDate, dueDate}, handleSubmit } = this.props;

    const styles = {
      listPadding: {
        padding: "0 20px 0 0"
      },
      listItem : {
        padding: "0 0 20px 20px",
        border: "1px solid black",
        listStyleType: 'none'
      },
    }

    return (
      <form className="form-group" style={styles.formStyle} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <TextField
          floatingLabelText="Task Name"
          style={styles.inputFields}
          {...taskName}
        /><br />
        <TextField
          floatingLabelText="Description"
          style={styles.inputFields}
          {...description}
        /><br />
        <TextField
          floatingLabelText="Start Date"
          style={styles.inputFields}
          {...startDate}
        /><br />
        <TextField
          floatingLabelText="Due Date"
          style={styles.inputFields}
          {...dueDate}
        /><br />
      <RaisedButton label="Submit" style={styles.submitButton} onMouseDown={handleSubmit(this.onSubmit.bind(this))} />

      </form>
    );
  }
}

export default reduxForm({
  form: 'taskForm',
  fields: ['taskName', 'description', 'startDate', 'dueDate']
}, null, { addTask })(TaskForm);