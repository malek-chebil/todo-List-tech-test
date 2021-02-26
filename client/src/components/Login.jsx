import React, {useState}  from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
  email_style:{
    fontFamily:"lato",
    color:"#2e6272",
    fontSize:"22px"
  },
  margin_items:{
marginTop:"20px",

  },
  buttonLog : {
    position: 'relative',
    top: '80px',
    left: '-103px',
    backgroundColor:' #2e6272'
},
  
}));

export default function Login(props) {
  const [password , setpassword] = useState("");
  const [email , setemail] = useState("");

function updatechange(e){
switch (e.target.id){
case "standard-password-input":
  setpassword(e.target.value);
  break;
case "standard-input":
setemail(e.target.value);
break;
}
}
 function login(){
  
   let passwordStored= window.localStorage.getItem('Password');
   let emailStored= window.localStorage.getItem('Email');
   if(emailStored==email&&passwordStored==password){
   props.login(true)
   }
  };
  const classes = useStyles();
  return (
    <div >
       <div className={classes.email_style}><img src="login-rounded-right.png" alt=""/></div>
       <div className = {classes.email_style}>Email</div>
       <TextField
          required
          id="standard-input"
          label="Required"
         onChange={updatechange}
        />
        <div className={classes.margin_items}>
         <div className = {classes.email_style} >Password</div>
         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={updatechange}
          style={{left: "38px"}}
        />
        <Button className = {classes.buttonLog} variant="contained"  onClick={login} >
      Login
    </Button>
        </div>
    </div>
  );
}
