/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  MonthView,
  WeekView,
  DayView,
  TodayButton,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';

import { connectProps } from '@devexpress/dx-react-core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import Notes from '@material-ui/icons/Notes';
import Close from '@material-ui/icons/Close';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Create from '@material-ui/icons/Create';
import API from '../utils/API';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { appointments } from '../Data/data';

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

const containerStyles = theme => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  header: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  closeButton: {
    float: 'right',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  picker: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  textField: {
    width: '100%',
  },
});

class AppointmentFormContainerBasic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentChanges: {},
    };

    this.getAppointmentData = () => {
      const { appointmentData } = this.props;
      return appointmentData;
    };
    this.getAppointmentChanges = () => {
      const { appointmentChanges } = this.state;
      return appointmentChanges;
    };

    this.changeAppointment = this.changeAppointment.bind(this);
    this.commitAppointment = this.commitAppointment.bind(this);
  }

  changeAppointment({ field, changes }) {
    const nextChanges = {
      ...this.getAppointmentChanges(),
      [field]: changes,
    };
    this.setState({
      appointmentChanges: nextChanges,
    });
  }

  commitAppointment(type) {
    const { commitChanges } = this.props;
    const appointment = {
      ...this.getAppointmentData(),
      ...this.getAppointmentChanges(),
    };
    if (type === 'deleted') {
      commitChanges({ [type]: appointment.id });
    } else if (type === 'changed') {
      commitChanges({ [type]: { [appointment.id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    this.setState({
      appointmentChanges: {},
    });
  }

  render() {
    const {
      classes,
      visible,
      visibleChange,
      appointmentData,
    } = this.props;
    const { appointmentChanges } = this.state;

    const displayAppointmentData = {
      ...appointmentData,
      ...appointmentChanges,
    };

    const isNewAppointment = appointmentData.id === undefined;
    const applyChanges = isNewAppointment
      ? () => this.commitAppointment('added')
      : () => this.commitAppointment('changed');

    const textEditorProps = field => ({
      variant: 'outlined',
      onChange: ({ target }) => this.changeAppointment({ field: [field], changes: target.value }),
      value: displayAppointmentData[field] || '',
      label: field[0].toUpperCase() + field.slice(1),
      className: classes.textField,
    });

    const pickerEditorProps = field => ({
      className: classes.picker,
      ampm: false,
      value: displayAppointmentData[field],
      onChange: date => this.changeAppointment({ field: [field], changes: date.toDate() }),
      inputVariant: 'outlined',
      format: 'DD/MM/YYYY HH:mm',
      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/],
    });

    return (
      <AppointmentForm.Popup
        visible={visible}
        onBackdropClick={visibleChange}
      >
        <AppointmentForm.Container className={classes.container}>
          <div className={classes.header}>
            <IconButton className={classes.closeButton} onClick={visibleChange}>
              <Close color="action" />
            </IconButton>
          </div>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Create className={classes.icon} color="action" />
              <TextField
                {...textEditorProps('title')}
              />
            </div>
            <div className={classes.wrapper}>
              <CalendarToday className={classes.icon} color="action" />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                  label="Start Date"
                  {...pickerEditorProps('startDate')}
                />
                <KeyboardDateTimePicker
                  label="End Date"
                  {...pickerEditorProps('endDate')}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.wrapper}>
              <LocationOn className={classes.icon} color="action" />
              <TextField
                {...textEditorProps('location')}
              />
            </div>
            <div className={classes.wrapper}>
              <Notes className={classes.icon} color="action" />
              <TextField
                {...textEditorProps('notes')}
                multiline
                rows="6"
              />
            </div>
          </div>
          <div className={classes.buttonGroup}>
            {!isNewAppointment && (
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  visibleChange();
                  this.commitAppointment('deleted');
                }}
              >
                Delete
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                applyChanges();
              }}
            >
              {isNewAppointment ? 'Create' : 'Save'}
            </Button>
          </div>
        </AppointmentForm.Container>
      </AppointmentForm.Popup>
    );
  }
}

const AppointmentFormContainer = withStyles(containerStyles, { name: 'AppointmentFormContainer' })(AppointmentFormContainerBasic);

const styles = theme => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
  },
});

/* eslint-disable-next-line react/no-multi-comp */
class MainCalendar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // currentDate: '2019-06-27',
      currentViewName: 'work-week',
      confirmationVisible: false,
      editingFormVisible: false,
      deletedAppointmentId: undefined,
      editingAppointmentId: undefined,
      addedAppointment: {},
      startDayHour: 9,
      endDayHour: 22,
    };

   

    this.loadClient = (res) => {
      console.log(res)
      API.getAppointments()
        .then(res =>{
          // console.log(res.data);
          this.setState({ client: res.data, title: "", startDate: "", endDate: "", location: "", notes: "" })
          console.log(this.state.client);
        })
        .catch(err => console.log(err));
    };

    this.saveClient = () => {
      console.log(this.state);
      const [appt] = this.state.data;
      API.saveAppointment(appt)
      .then(this.loadClient)
      .catch(err => console.log(err));
        
    };
    this.deleteAppt = id => {
      API.deleteAppointment(id)
        .then(res => this.loadClient())
        .catch(err => console.log(err));
    };

    this.changeAppt = id => {
      const [appt] = this.state.data;
      API.saveAppointment(appt)
      .then(this.loadClient)
      .catch(err => console.log(err));
    };
    
    

    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };

    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };

    this.toggleConfirmationVisible = this.toggleConfirmationVisible.bind(this);
    this.commitDeletedAppointment = this.commitDeletedAppointment.bind(this);
    this.toggleEditingFormVisibility = this.toggleEditingFormVisibility.bind(this);

    this.commitChanges = this.commitChanges.bind(this);
    this.onEditingAppointmentIdChange = this.onEditingAppointmentIdChange.bind(this);
    this.onAddedAppointmentChange = this.onAddedAppointmentChange.bind(this);
    this.appointmentForm = connectProps(AppointmentFormContainer, () => {
      const {
        editingFormVisible, editingAppointmentId, data, addedAppointment,
      } = this.state;

      const currentAppointment = data
        .filter(appointment => appointment.id === editingAppointmentId)[0] || addedAppointment;

      return {
        visible: editingFormVisible,
        appointmentData: currentAppointment,
        commitChanges: this.commitChanges,
        visibleChange: this.toggleEditingFormVisibility,
        onEditingAppointmentIdChange: this.onEditingAppointmentIdChange,
      };
    });
  }

  componentDidMount() {
    this.loadClient();
  };

  componentDidUpdate() {
    this.appointmentForm.update();
  }

  onEditingAppointmentIdChange(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  onAddedAppointmentChange(addedAppointment) {
    this.setState({ addedAppointment });
    this.onEditingAppointmentIdChange(undefined);
  }

  setDeletedAppointmentId(id) {
    this.setState({ deletedAppointmentId: id });
  }

  toggleEditingFormVisibility() {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible,
    });
  }

  toggleConfirmationVisible() {
    const { confirmationVisible } = this.state;
    this.setState({ confirmationVisible: !confirmationVisible });
  }

  commitDeletedAppointment() {
    this.setState((state) => {
      const { data, deletedAppointmentId } = state;
      const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId);

      return { data: nextData, deletedAppointmentId: null };
    });
    this.toggleConfirmationVisible();
  }

  commitChanges({ added, changed, deleted }) {
    console.log(added, changed);
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        this.setDeletedAppointmentId(deleted);
        this.toggleConfirmationVisible();
      }
      return { data, addedAppointment: {} };
    }, ()=>{
      this.saveClient();
    });
  }

  render() {
    const {
      currentDate,
      confirmationVisible,
      editingFormVisible,
      startDayHour,
      endDayHour,
      currentViewName
    } = this.state;
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler
            data={this.state.client}
            height={660}
          >
            <ViewState
              currentDate={currentDate}
              currentViewName={currentViewName}
              onCurrentViewNameChange={this.currentViewNameChange}
              onCurrentDateChange={this.currentDateChange}
            />
            <EditingState
              onCommitChanges={this.commitChanges}
              onEditingAppointmentIdChange={this.onEditingAppointmentIdChange}
              onAddedAppointmentChange={this.onAddedAppointmentChange}
            />
            <WeekView
              startDayHour={startDayHour}
              endDayHour={endDayHour}
            />
            <WeekView
              name="work-week"
              displayName="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />
            <DayView 
              startDayHour={9}
              endDayHour={22}/>
            <Appointments />
            < AppointmentTooltip
              showOpenButton
              showCloseButton
              showDeleteButton
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <AppointmentForm
              popupComponent={this.appointmentForm}
              visible={editingFormVisible}
              onVisibilityChange={this.toggleEditingFormVisibility}
            />
            <DragDropProvider />
          </Scheduler>

          <Dialog
            open={confirmationVisible}
            onClose={this.cancelDelete}
          >
            <DialogTitle>
              Delete Appointment
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this appointment?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            < Button onClick={this.toggleConfirmationVisible} color="primary" variant="outlined">
                Cancel
              </Button>
              <Button onClick={this.commitDeletedAppointment} color="secondary" variant="outlined">
                Delete
             </Button>
            </DialogActions>
          </Dialog>

          <Fab
            color="secondary"
            className={classes.addButton}
            onClick={() => {
              this.setState({ editingFormVisible: true });
              this.onEditingAppointmentIdChange(undefined);
              this.onAddedAppointmentChange({
                startDate: new Date(currentDate).setHours(startDayHour),
                endDate: new Date(currentDate).setHours(startDayHour + 1),
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { name: 'EditingDemo' })(MainCalendar);