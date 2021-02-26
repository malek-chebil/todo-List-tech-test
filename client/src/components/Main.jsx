import React, {useState} from "react";
import Login from "./Login.jsx";
import TodoList from "./TodoList.jsx";
export default function main(props) {
  return (
    <div style={{margin:"auto",width:"auto",textAlign:"center",marginTop:"120px"}}>
      {props.islogged?<TodoList/>:<Login login={props.login}/>}
    </div>
  );
}
