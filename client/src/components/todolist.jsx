import React, { useState} from "react";
import Login from "./Login.jsx";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
    fontSize: "20px",
  },
  date: {
    fontsize: "11px",
    position: "relative",
    bottom: "-30px",
  },
  label: {
    color: "#b99c72",
    fontSize: "45px",
    textShadow: "4px 5px 3px #000000f0",
  },
  inputStyle: {
    fontSize: "15px",
  },
}));

export default function main(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState();

  const [todoID, settodoid] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [edit, setedit] = useState(false);
  const [seletedid, setselectedid] = useState(false);
  const [newedit, setnewedit] = useState("");
  const [selectedContent, setSelectedContent] = useState("");
  

  function handelKeyPress(e) {
    if (e.charCode == 13) {
      if (todoTitle.length && content.length) {
        setTodoList([
          ...todoList,
          {
            id: todoID,
            text: content,
            title: todoTitle,
            lastmodification: null,
          },
        ]);
        settodoid(todoID + 1);
        setTitle("");
        setcontent("");
        
      }
    }
  }
  function handeltitle(e) {
    setTitle(e.target.value);
  }
  function handelContent(e) {
    setcontent(e.target.value);
  }
  function deletetodo(e) {
    let newtodo = todoList.filter((todo) => todo.id !== e.target.id * 1);
    setTodoList(newtodo);
  }
  function handelmodifi(e) {
    setnewedit(e.target.value);
  }
  function setmodif(e) {
    if (e.charCode == 13) {
      var date = new Date();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hour = date.getHours();
      var month = date.getMonth();
      var day = date.getDate();
      var year = date.getFullYear();
      let newtodo = todoList.map((elem) => {
        if (elem.id * 1 == seletedid * 1) {
          var copie = Object.assign({}, elem);
          copie.lastmodification =
            "Modifier le :" +
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hour +
            ":" +
            minutes +
            ":" +
            seconds;
          copie.text = newedit;
          return copie;
        } else {
          return elem;
        }
      });
      setTodoList(newtodo);
      setedit(false);
    }
  }

  function editcontent(e) {
    setedit(!edit);
    setselectedid(e.target.id * 1);
  }

  return (
    <div>
      <h1 className={classes.label}>ToDo List</h1>
      <div className={classes.inputStyle}>
        <TextField
          label="Titre"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={todoTitle}
          onChange={handeltitle}
        />
        <TextField
          label="Contenue"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={content}
          onChange={handelContent}
          onKeyPress={handelKeyPress}
        />
        {edit ? (
          <TextField
            label="Edit Content"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            onChange={handelmodifi}
            onKeyPress={setmodif}
          />
        ) : null}
      </div>
      <ul>
        {todoList.map((todo) => (
          <div style={{ display: "flex" }}>
            <FormControl fullWidth className={classes.margin} key={todo.id}>
              <InputLabel htmlFor="standard-adornment-amount">
                {todo.title}
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">{todo.text}</InputAdornment>
                }
              />
            </FormControl>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}q
            />
            <CloseIcon
              style={{ height: "auto" }}
              id={todo.id}
              onClick={deletetodo}
            />
            <EditIcon
              onClick={editcontent}
              id={todo.id}
              style={{ height: "auto" }}
            />
            <div className={classes.date}>{todo.lastmodification}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
