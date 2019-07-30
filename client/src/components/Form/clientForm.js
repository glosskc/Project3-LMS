import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export default function ClientForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Client Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="clientName"
            name="clientName"
            label="Client name"
            fullWidth
            autoComplete="cname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            // autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="phone" 
          name="phone" 
          label="Phone" 
          fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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




// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// // export default function ClientForm() {
// export function ClientForm {
//   state = {
//     clientName: "",
//     address1: "",
//     email: "",
//     phone: "",
//     notes: "",

//   };

//   // componentDidMount() {
//   //   this.loadBooks();
//   // }

//   loadClients = () => {
//     API.getClients()
//       .then(res =>
//         this.setState({ Clients: res.data, ClientName: "", address1: "", email: "", phone: "",  notes: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   // deleteClient = id => {
//   //   API.deleteClient(id)
//   //     .then(res => this.loadCLients())
//   //     .catch(err => console.log(err));
//   // };

//   // handleInputChange = event => {
//   //   const { name, value } = event.target;
//   //   this.setState({
//   //     [name]: value
//   //   });
//   // };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.ClientName && this.state.address1) {
//       API.saveClient({
//         clientName: this.state.clientName,
//         address1: this.state.address1,
//         email: this.state.email,
//         phone: this.state.phone,
//         notes: this.state.notes,
//       })
//         .then(res => this.loadClients())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Typography variant="h6" gutterBottom>
//           Client 
//       </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               value={this.state.clientName}
//               id="clientName"
//               name="clientName"
//               label="Client name"
//               fullWidth
//               autoComplete="fname"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               value={this.state.address1}
//               id="address1"
//               name="address1"
//               label="Address line"
//               fullWidth
//               autoComplete="billing address-line1"
//             />
//           </Grid>
//           {/* <Grid item xs={12}>
//           <TextField
//             id="address2"
//             name="address2"
//             label="Address line 2"
//             fullWidth
//             autoComplete="billing address-line2"
//           />
//         </Grid> */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               value={this.state.email}
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               // autoComplete="billing address-level2"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               value={this.state.phone}
//               id="phone"
//               name="phone"
//               label="Phone"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               value={this.state.zip}
//               id="notes"
//               name="notes"
//               label="Notes"
//               fullWidth
//             />
//           </Grid>
//           {/* <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="billing country"
//           />
//         </Grid> */}
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//               label="Use this address for payment details"
//             />
//           </Grid>
//         </Grid>
//       </React.Fragment>
//     );
//   }
// }

// export default ClientForm;