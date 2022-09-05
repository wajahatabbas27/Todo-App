import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import db from "../firebase/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import firebase from "firebase/compat/app";

//=====================================================================
// Styles for material-ui modal
// Using the makeStyles hook for styling provided by material-ui
// Creating an object of styels to be used in the classes section
//=====================================================================
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#44b3eb",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Todo = ({ todoData: { todo, id } }) => {
  // useStyles hook is used to add classes in material ui
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  //=================================
  // modal to open
  // setting state to true
  //=================================
  const handleOpen = () => {
    setOpen(true);
  };

  //===================================
  // Update Todo to update in database
  //===================================
  const updateTodo = () => {
    // update the todo with new input text
    db.collection("todos").doc(id).set(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //adding timestamp inorder to sort on snapshot
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper} >
          <h1 style={{ color: "#1c4bba" }}>Update Todo 👈</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <Input
              type='text'
              placeholder={todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              style={{ padding: "5px" }}
            />
            <Button
              disabled={!input}
              variant='contained'
              onClick={updateTodo}
              // style={{ marginLeft: "20px" }}
            >
              Edit
            </Button>
          </div>
        </div>
      </Modal>

      <List style={{ display: "flex", alignItems: "center" }}>
        <ListItem>
          <ListItemText primary={todo} secondary='Todo List💥' />
        </ListItem>
        <EditIcon style={{ padding: "5px" }} onClick={handleOpen} />
        <DeleteIcon onClick={(e) => db.collection("todos").doc(id).delete()} />
      </List>
    </>
  );
};

export default Todo;
