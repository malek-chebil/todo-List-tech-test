import React, { useState } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import { makeStyles } from '@material-ui/core/styles';
import SimpleContainer from "./components/container.jsx";
import { Container } from '@material-ui/core'
function App (){
  const [isLogged, setlogin] = useState(false);
function  login(data){
if(data){
  setlogin(true);
}
  }
 function deconnection(){
    setlogin(false)
  }
  return(<div>
    <NavBar islogged={isLogged} deconnect={deconnection}/>
   
<Container maxWidth="md">
  <Main islogged={isLogged} login={login}/>
</Container>
    
  </div>)
    }
  
  
  ReactDOM.render(<App />, document.getElementById("App"));
