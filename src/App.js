import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, InputLabel } from "@mui/material";
import Todo from "./components/Todo";
import db from "./firebase/firebase";
import firebase from "firebase/compat/app";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //AddTodo Function
  const AddTodo = (event) => {
    event.preventDefault();

    //===================================================================================================================================
    // Adding the data to the database by just using the add method over here! & just providing the field and the value of overhere!
    //===================================================================================================================================
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //adding timestamp inorder to sort on snapshot
    });
    setInput("");
  };

  //=====================================================================================================================================
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // getting the data from the firebase in the useEffect using the snapshot function in collections from the database
  //=====================================================================================================================================
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);


  return (
    <div className='App'>
      <h2>Todo App using React,Firebase & Material-UI</h2>

      <div className='todo'>
        <form>
          <InputLabel>Input Todo 📝📝📝 </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />{" "}
          <Button
            variant='contained'
            type='submit'
            disabled={!input}
            onClick={AddTodo}
          >
            Add Todo
          </Button>
        </form>

        <br />
        <br />

        <div>
          {todos.map((todo, index) => (
            <div key={index}>
              <Todo todoData={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
