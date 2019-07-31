import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateTimePicker from '../DateTimePicker/datePicker';


export default function TaskForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Task Form
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12}>
          <TextField
            required
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
            required
            id="location"
            name="location"
            label="Task Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
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