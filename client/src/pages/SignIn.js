import React from 'react';
import SignUpModal from '../components/Modal';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'

const useStyles = theme => {
    return {root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://static.businessworld.in/article/article_extra_large_image/1516276756_NzomBP_ENTREPRENEUR-ST470.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }
};

  class SignIn extends React.PureComponent {
    constructor(props){
      super(props);

      this.state = {
        username: '',
        password: ''
       };
    }
  
     handleInputChange = event => {
       console.log("event" + event);
        const { name, value } = event.target;
  
     this.setState({
      [name]: value
     });
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
  
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(event, user)
      
      API.signIn(user).then(res => {
        console.log("this: " + res);
        this.setState({ 
          username: '',
          password: ''
        });
        this.props.history.push('/app/dashboard');
      })
      
    };

  
    render(){
      const classes = this.props.classes;
      return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputChange.bind(this)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleFormSubmit.bind(this)}
                >
                  Sign In
                </Button>
                <SignUpModal />
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }
    
  }

  export default withStyles(useStyles, { name: 'Signup' })(SignIn) 