import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateTimePicker from '../DateTimePicker/datePicker';
import API from '../../utils/API'

class TaskForm extends Component {
  state = {
    taskTitle: "",
    datePicker: "",
    timePicker: "",
    location: "",
    taskNotes: "",
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks () {
    API.getTasks()
      .then(res =>
        this.setState({ Tasks: res.data, TaskTitle: "", datePicker: "", timePicker: "", location: "", taskNotes: "" }))
      .catch(err => console.log(err));
  }

  // deleteTask = id => {
  //   API.deleteTask(id)
  //     .then(res => this.loadTasks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event)  {
    event.preventDefault();
    if (this.state.TaskTitle && this.state.location) {
      API.saveTask({
        taskTitle: this.state.taskTitle,
        datePicker: this.state.datePicker,
        timePicker: this.state.timePicker,
        location: this.state.location,
        taskNotes: this.state.taskNotes,
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    }
  }
// export default function TaskForm() {
render () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Task
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12}>
          <TextField
            onChange={this.props.handleInputChange}
            required
            value={this.props.taskTitle}
            id="taskTitle"
            name="taskTitle"
            label="Task Title"
            fullWidth
          />
        </Grid>
      < Grid item xs={12}>
        <DateTimePicker/>
      </Grid> 
        <Grid item xs={12}>
          <TextField
            onChange={this.props.handleInputChange}
            required
            value={this.props.location}
            id="location"
            name="location"
            label="Task Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={this.props.handleInputChange}
            required
            value={this.props.taskNotes}
            id="taskNotes"
            name="taskNotes"
            label="Task Notes" 
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
}
export default TaskForm;