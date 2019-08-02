import React, { Component } from "react";
import  SimpleContainer  from "../components/Grid";
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import SimpleTable from "../components/table";
import RecipeReviewCard from "../components/card";
import { Card, CardHeader, CardContent, CardActions, IconButton, List, ListItem, Avatar, ListItemText, Divider, Icons, ListItemIcon } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";
import Table2 from '../components/table2';
import Calendar from '../components/WeekCalendar';
import API from './../utils/API';


class Dashboard extends Component{

    state = {
        client: [],
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        notes: ""
      };
    

    componentDidMount(){
        this.loadClient();
        this.loadClientInfo();
    };

    loadClientInfo = () => {
        API.getClients()
          .then(res =>{
            // console.log(res.data);
            this.setState({ clientInfo: res.data, clientName: "", taskName: "", email: "", phone: "", address: "", notes: "" })
            console.log(this.state.clientInfo);
          })
          .catch(err => console.log(err));
      };

      loadClient = () => {
        API.getAppointments()
          .then(res =>{
            // console.log(res.data);
            this.setState({ client: res.data, title: "", startDate: "", endDate: "", location: "", notes: "" })
            console.log(this.state.client);
          })
          .catch(err => console.log(err));
      };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //       API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

    render(){
      
        return(
            <div className="grid-xs-12">
            <Container> 
             <Grid container spacing={3}>
                 <Grid item xs={8}>
                     <Paper className="grid-xs=8">
                     <Calendar value={this.state.client}></Calendar>
                     {/* <SimpleTable>
                      </SimpleTable> */}
                     </Paper>
                 </Grid>
                <Grid item xs={4}>
                    <Paper className="grid-xs-4">
                <RecipeReviewCard />
                {/* <Card>
                    <CardHeader
                      avatar={
                          <Avatar aria-label="Client" className={mergeClasses.avatar}>
                              C
                          </Avatar>
                      }
                       title="Client Information"
                        />
                    <Divider />
                    <CardContent>
                      <List>
                        <ListItem>
                          <ListItemText title="name" primary="Name:" />
                        </ListItem>   
                        <ListItem>
                          <ListItemText title="address" primary="Address:" />
                        </ListItem>
                        <ListItem>
                          <ListItemText title="Phone" primary="Phone:" />
                        </ListItem>
                        <ListItem>
                          <ListItemText title="Job" primary="Job:" />
                        </ListItem>
                        <ListItem>
                          <ListItemText title="Info" primary="Info:" />
                        </ListItem>
                        <Divider />
                      </List>
                    </CardContent>
                    </Card> */}
                    </Paper>
                </Grid>
           </Grid>
           </Container>
           <Container>
           <Grid container spacing={3}>
               <Grid item xs={12}>
           <Table2 value={this.state.clientInfo} />
           </Grid>
           </Grid>
           </Container>
           </div>
           

        

        )
    }
}

export default Dashboard;

