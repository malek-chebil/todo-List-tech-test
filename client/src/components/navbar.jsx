import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  background_color:{
    background:"#2e6272",
    color:"#ece7e7fc"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    
    wordSpacing: "-5px",
    marginRight: theme.spacing(3),
    marginLeft:"-15px"
  },
  icon:{
    marginRight: theme.spacing(3),
    height:"30px"
  }
}));

export default function NavBar(props) {

  const classes = useStyles();
 function disconnect(){
  props.deconnect()
 }
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.background_color}> 
        <Toolbar variant="dense">
          <LibraryBooksIcon className={classes.icon} fontSize="large"/>
        <Typography variant="h3" color="inherit" className={classes.title}>
            ToDo List
          </Typography>
          {props.islogged ?null:<Typography variant="h6" color="inherit" className={classes.menuButton}>
            Login
          </Typography>}
          {props.islogged ?<Typography variant="h6" color="inherit"className={classes.menuButton}>
            Taches
          </Typography>:null}
          {props.islogged ?<Typography variant="h6" color="inherit"className={classes.menuButton} onClick={disconnect}>
            Deconnection
          </Typography>:null} 
        </Toolbar>
      </AppBar>
    </div>

    );
  }
  