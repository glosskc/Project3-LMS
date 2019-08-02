import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';




export default function DateTimePickers() {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-07-27T21:11:54'));
  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container  justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          name="datePicked"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          name="timePicked"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}