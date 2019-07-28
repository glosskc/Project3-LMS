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
            id="taskAddress"
            name="taskAddress"
            label="Task Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
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