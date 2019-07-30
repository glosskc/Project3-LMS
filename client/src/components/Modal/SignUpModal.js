import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../utils/API'


class SignUpModal extends Component {

  handleClickOpen() {
    this.setState({
      open:true
    })
  }

  handleClose() {
    this.setState({
      open:false
    })
  }
  
  state = {
    open: false,
    email: '',
    password: ''
   };

  //  handleInputChange = event => {
  //    console.log("event" + event);
  //     const { name, value } = event.target;

  //  this.setState({
  //   [name]: value
  //  });
  // };
  
  handleFormSubmit = event => {
    event.preventDefault();
    API.getSignUp().then(res => {
      console.log("this: " + res);
      this.setState({ email: '',
          password: '',
          open:false});
    })
    
  };

  render(){
    return (
      <div>
        <Button 
          fullWidth
          variant="contained"
          color="primary"  
          onClick={this.handleClickOpen.bind(this)}
          >
          Sign Up
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose.bind(this)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To sign up for an account with LMS Schedule, please give us an Email, and create a password here.
            </DialogContentText>
              <form noValidate autoComplete="off">
                 <TextField
                      autoFocus
                      margin="normal"
                      id="email"
                      label="Email Address"
                      type="email"
                      // value={this.state.email}
                      // onChange={this.handleInputChange.bind(this)}
                      fullWidth
                      required
                  />
                  <TextField
                      autoFocus
                      margin="normal"
                      id="password"
                      label="Password"
                      type="text"
                      // value={this.state.password}
                      // onChange={this.handleInputChange.bind(this)}
                      fullWidth
                      required
                  />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit.bind(this)} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}

export default SignUpModal;