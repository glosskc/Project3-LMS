import React, { Component } from "react";
import  SimpleContainer  from "../components/Grid";
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import SimpleTable from "../components/table";




class Dashboard extends Component{
    

    componentDidMount(){

    };

    render(){
      
        return(
            <div className="grid-xs-12">
            <Container> 
             <Grid container spacing={3}>
                 <Grid item xs={8}>
                     <Paper className="grid-xs=8">
                     <SimpleTable>
                      </SimpleTable>
                     </Paper>
                 </Grid>
                <Grid item xs={4}>
                    <Paper className="grid-xs-4">
                    <CardMedia>
                        
                        <h1>Hello</h1>

                    </CardMedia>
                    </Paper>

                </Grid>
           </Grid>
           </Container>
           </div>

        )
    }
}

export default Dashboard;

