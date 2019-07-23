import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SignUpModal() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button 
        fullWidth
        variant="contained"
        color="primary"  
        onClick={handleClickOpen}
        >
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To sign up for an account with LMS Schedule, please enter an Email, and create a new UserName and PassWord here.
          </DialogContentText>
            <form noValidate autoComplete="off">
               <TextField
                    autoFocus
                    margin="normal"
                    id="standard-email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                />
                <TextField
                    autofocus
                    margin="normal"
                    id="standard-name"
                    label="UserName"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    autofocus
                    margin="normal"
                    id="standard-password-input"
                    label="PassWord"
                    type="text"
                    fullWidth
                    required
                />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}