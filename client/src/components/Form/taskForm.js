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


  render() {

    const { fields: {clientName, taskName, location, startDate, endDate, notes}, handleSubmit } = this.props;

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
          floatingLabelText="Client Name"
          style={styles.inputFields}
          {...clientName}
        /><br />
        <TextField
          floatingLabelText="Task Name"
          style={styles.inputFields}
          {...taskName}
        /><br />
        <TextField
          floatingLabelText="Location"
          style={styles.inputFields}
          {...location}
        /><br />
        <TextField
          floatingLabelText="Start Date"
          style={styles.inputFields}
          {...startDate}
        /><br />
        <TextField
          floatingLabelText="End Date"
          style={styles.inputFields}
          {...endDate}
        /><br />
        <TextField
          floatingLabelText="Notes"
          style={styles.inputFields}
          {...notes}
        /><br />
      <RaisedButton label="Submit" style={styles.submitButton} onMouseDown={handleSubmit(this.onSubmit.bind(this))} />

      </form>
    );
  }
}

export default reduxForm({
  form: 'taskForm',
  fields: ['clientName', 'taskName', 'location', 'startDate', 'endDate', 'notes']
}, null, { addTask })(TaskForm);

