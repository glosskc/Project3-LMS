// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// export default function ClientForm() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Client Address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="clientName"
//             name="clientName"
//             label="Client name"
//             fullWidth
//             autoComplete="cname"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address"
//             name="address"
//             label="Address line"
//             fullWidth
//             autoComplete="billing address-line1"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="email"
//             name="email"
//             label="Email"
//             fullWidth
//             // autoComplete="billing address-level2"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField 
//           id="phone" 
//           name="phone" 
//           label="Phone" 
//           fullWidth 
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="notes"
//             name="notes"
//             label="Notes"
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }




import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import API from '../../utils/API'

// export default function ClientForm() {
class ClientForm extends Component {
  state = {
    clientName: "",
    address: "",
    email: "",
    phone: "",
    notes: "",
  };

  componentDidMount() {
    this.loadClients();
  }

  loadClients () {
    API.getClients()
      .then(res =>
        this.setState({ Clients: res.data, ClientName: "", address: "", email: "", phone: "",  notes: "" })
      )
      .catch(err => console.log(err));
  }

  // deleteClient = id => {
  //   API.deleteClient(id)
  //     .then(res => this.loadCLients())
  //     .catch(err => console.log(err));
  // };

  handleInputChange (event) {
    const { name, value } = event.target;
    console.log(name,value);
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit (event) {
    event.preventDefault();
    if (this.state.ClientName && this.state.address) {
      API.saveClient({
        clientName: this.state.clientName,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
        notes: this.state.notes,
      })
        .then(res => this.loadClients())
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Client 
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={this.propshandleInputChange}
              required
              fullWidth
              value={this.props.clientName}
              id="clientName"
              name="clientName"
              label="Client name"
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.props.handleInputChange}
              required
              value={this.props.address}
              id="address"
              name="address"
              label="Address line"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleInputChange}
              required
              value={this.props.email}
              id="email"
              name="email"
              label="Email"
              fullWidth
              // autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleInputChange}
              value={this.props.phone}
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.props.handleInputChange}
              required
              value={this.props.notes}
              id="notes"
              name="notes"
              label="Notes"
              fullWidth
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
}

export default ClientForm;