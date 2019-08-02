import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClientForm from '../components/Form/clientForm';
import TaskForm from '../components/Form/taskForm';
import PaymentForm from '../components/Form/paymentForm';
import Review from '../components/Form/review';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  grid: {
    width: '60%',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Client', 'Task', 'Payment', 'Review'];


class ClientServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      clientName: "",
      address: "",
      email: "",
      phone: "",
      notes: "",
      taskTitle: "",
      datePicker: "",
      timePicker: "",
      location: "",
      taskNotes: "",
      cardName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  getStepContent(step) {
    switch (step) {
      case 0:
        return <ClientForm
          handleInputChange={this.handleInputChange} 
        />;
      case 1:
        return <TaskForm 
        handleInputChange={this.handleInputChange} 
        />;
      case 2:
        return <PaymentForm 
        handleInputChange={this.handleInputChange} 
        />;
      case 3:
        return <Review 
        // handleFormSubmit={this.handleFormSubmit}
        />;
      default:
        throw new Error('Unknown step');
    }
  }
  handleFormSubmit(event) {
    console.log('logging current state', this.state);
    event.preventDefault();
    if (this.state.clientName && this.state.address) {
      API.saveClient({
        clientName: this.state.clientName,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
        notes: this.state.notes,
        taskTitle: this.state.taskTitle,
        datePicker: this.state.datePicker,
        timePicker: this.state.timePicker,
        location: this.state.location,
        taskNotes: this.state.taskNotes,
      }) 
        .then(res => this.loadClients())
        .catch(err => console.log(err));
    }
    // else if (this.state.taskTitle && this.state.location) {
    //   API.saveTask({
    //     taskTitle: this.state.taskTitle,
    //     datePicker: this.state.datePicker,
    //     timePicker: this.state.timePicker,
    //     location: this.state.location,
    //     taskNotes: this.state.taskNotes,
    //   })
    //     .then(res => this.loadTasks())
    //     .catch(err => console.log(err));
    // }
  }
  

  handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleNext(event) {
    if (this.state.activeStep===3){
      this.handleFormSubmit(event)
      return;
    }
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }
  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1,
    })
  }
  render() {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create a Task
            </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(this.state.activeStep)}
                    <div className={classes.buttons}>
                      {this.state.activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                      </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {this.state.activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );

  }
}
export default withStyles(useStyles, { name: 'ClientServices' })(ClientServices);


// export default function ClientServices() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

// }