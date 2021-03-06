import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher, 
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../../Data/data';
import API from '../../utils/API';


export default class WeekCalendar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentViewName: 'work-week',
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };

  }
  
  render() {
    // const { data, currentViewName } = this.state;
    const data = this.props.value;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={350}
        >
          <ViewState
            // defaultCurrentDate="2018-07-25"
            currentViewName={this.state.currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
          />

          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}