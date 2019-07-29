import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Date from '../components/Date/date'


export default function TaskForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Task Form
      </Typography>
      <Grid container spacing={3}>
        
        {/* <Date /> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="taskAddress"
            name="taskAddress"
            label="Task Address"
            fullWidth
            // autoComplete="billing address-line1"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid> */}
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
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
              id="standard-multiline-flexible"
              label="Notes"
              multiline
              rowsMax="4"
              fullWidth
              // value={values.multiline}
              // onChange={handleChange('multiline')}
              // className={classes.textField}
              margin="normal"
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






















// import React, {Component, PropTypes} from 'react';
// import {reduxForm} from 'redux-form';
// import TextField from 'material-ui/lib/text-field';
// import RaisedButton from 'material-ui/lib/raised-button';


// import { addTask } from '../actions/actions';

// class TaskForm extends Component {
//   static propTypes = {
//     handleSubmit: PropTypes.func,
//   };

//   onSubmit(props) {
//     console.log('on submit task props: ', props)
//     this.props.addTask(props)
//   }


//   render() {

//     const { fields: {clientName, taskName, location, startDate, endDate, notes}, handleSubmit } = this.props;

//     const styles = {
//       listPadding: {
//         padding: "0 20px 0 0"
//       },
//       listItem : {
//         padding: "0 0 20px 20px",
//         border: "1px solid black",
//         listStyleType: 'none'
//       },
//     }

//     return (
//       <form className="form-group" style={styles.formStyle} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <TextField
//           floatingLabelText="Client Name"
//           style={styles.inputFields}
//           {...clientName}
//         /><br />
//         <TextField
//           floatingLabelText="Task Name"
//           style={styles.inputFields}
//           {...taskName}
//         /><br />
//         <TextField
//           floatingLabelText="Location"
//           style={styles.inputFields}
//           {...location}
//         /><br />
//         <TextField
//           floatingLabelText="Start Date"
//           style={styles.inputFields}
//           {...startDate}
//         /><br />
//         <TextField
//           floatingLabelText="End Date"
//           style={styles.inputFields}
//           {...endDate}
//         /><br />
//         <TextField
//           floatingLabelText="Notes"
//           style={styles.inputFields}
//           {...notes}
//         /><br />
//       <RaisedButton label="Submit" style={styles.submitButton} onMouseDown={handleSubmit(this.onSubmit.bind(this))} />

//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: 'taskForm',
//   fields: ['clientName', 'taskName', 'location', 'startDate', 'endDate', 'notes']
// }, null, { addTask })(TaskForm);

