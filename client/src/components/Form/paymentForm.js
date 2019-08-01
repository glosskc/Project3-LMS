// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// export default function PaymentForm() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField 
//             required 
//             id="cardName" 
//             label="Name on card" 
//             fullWidth 
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField 
//             required 
//             id="cardNumber" 
//             label="Card number" 
//             fullWidth 
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField 
//             required 
//             id="expDate" 
//             label="Expiry date" 
//             fullWidth 
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on signature strip"
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import API from '../../utils/API'

class PaymentForm extends Component {
  state = {
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  }

  componentDidMount() {
    this.loadPayments();
  }

  loadPayments () {
    API.getPayments()
      .then(res =>
        this.setState({ Payments: res.data, cardName: "", cardNumber: "", expDate: "", cvv: ""}))
      .catch(err => console.log(err));
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event)  {
    event.preventDefault();
    if (this.state.cardName && this.state.cardNumber) {
      API.savePayment({
        cardName: this.state.cardName,
        cardNumber: this.state.cardNumber,
        expDate: this.state.expDate,
        cvv: this.state.cvv,
      })
        .then(res => this.loadPayments())
        .catch(err => console.log(err));
    }
  }

render () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            onChange={this.props.handleInputChange}
            required
            value={this.state.cardName} 
            id="cardName" 
            label="Name on card" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            onChange={this.props.handleInputChange}
            required 
            value={this.state.cardNumber} 
            id="cardNumber" 
            label="Card number" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            onChange={this.props.handleInputChange}
            required
            value={this.state.expDate}  
            id="expDate" 
            label="Expiry date" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={this.props.handleInputChange}
            required
            value={this.state.cvv} 
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
}
export default PaymentForm;