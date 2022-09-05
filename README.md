# Todo App  👈

- firebase deployed link:
  https://todo-app-firebase-react-70d48.web.app/
 
- This is the todo App which we are building here using the:

  - React
  - Firebase

- In order to learn firebase overhere, we will be making todo app so to learn all the backend architecture and the functionality of the firebase in the application.

## Firebase

- Here we are using it as the backend as the service, Alone firebase will be managing things overhere for us;
- Saving the data here in the fireStore, deploying the Application on the firebase and using many other things overhere as well.

- npm install -g firebase-tools - globally installing the firebase tools.
- firebase config is the magic that connects our frontend application with firebase.
- Firebase they took all the complexity out from the backend and we just need to call the firebase from the frontend by just installing its package all the way!

- ****\*\*\*****FIREBASE SETUP STEP BY STEP**************************************************\*\***************************************************

- 1. npm i --save firebase -- install the firebase

- 2. firebase.initializeApp(config_from_firebase_console_here!) -- initializing the application

- 3. firebaseApp.firestore() -- connecting to database

- Setting the database on the console firestore.
- It is the collections of array, here in the collections we have 'todos' and it is the array over here! and we access to the indexes of the arrays using the ids, and it is the noSQL Documented Database.

- db.collection('todos').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc => doc.data().todo))
  }) ----- it means whenever there is the change in the database it gives the response of the snapshot , snapshot is the picture which resembles it gives all the data as the response.

- snapshot is helpfull to us whereever there is a change, anything got created,updated,deleted, all of these changes so as it will going to get the data to come for us!

- Best part about firebase is its realtime it is not needed to be reloaded al the way it just gets all the data in...

- db.collection('todos').add({
  todo: input
  }) -- this is how we are actually going to add the todo to the database of the collection 'todos'.

- we will be using the timestamp logic from the server to get the most recent todo from the database at the top.

- import firebase from "firebase/compat/app";
  import "firebase/compat/firestore";   -- imports from firebase must be like this to avoid error of nodemodules

- Here we are doing is getting the data from orderBy timestamp in descending order from the database by using .orderBy function!  

- To Delete we require the id of the todo in the database so we can delete the todo from the database, we have the id overhere as well with us so what we pass to the Todo component is the todo object for this time and that object will going to have the id and the actual todo and we will be deleting by using the id, we just passed inside the object.

- To delete an item from the colection we need to implement the logic : 
            <Button onClick={(e) => db.collection("todos").doc(id).delete()}>
        This is the logic which we need to implement to delete from the list of collections.

- Update Todo code  -- db.collection("todos").doc(id).set(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //adding timestamp inorder to sort on snapshot
      },
      { merge: true }
    );

    Merge true is necessary over here as it will update the value only and the id would be the same of the database.

## Material-UI

- npm install @mui/material @emotion/react @emotion/styled --- it is now available in the npm package

- Using material ui icon for modal,List,ListIem,ListItemText with attributes ; primary && secondary and Modal attributes; opne && onClose.
- Applying styles of material-ui as well with the model and importing useStyles with its classes attributes!

- Using Material-ui hooks like makeStyles and useStyles to implement material-ui style as told by the documentation.

### Extra Info

- When ever we reload state gets reloaded, as we save in the useState hook, its state.

- jsx is the language where we can implement javascript with html, example is the {} curly braces which we call for anything in the html code that is called the jsx real implementation.

- useState is the short term memory, whatever is saved inside the variable of the useState is basically in the short term memory of the state, means whenever we reload it the memory is refreshed again all the way!

- <input value onChange />

- setTodos([...todos,input]) -- It means basically that whatever is there in the todos will be there with the spread operator but it will also going to include the input that is written into that array, basically it will going to push an input into an array that that is todos basically and the spread operator basically loads the previous data that was there, if we don't write the ...todos so it will get only input inside the array not the other todos.

- If we want to use enter to add todos we must use the <form></form> and must put all our data inside the form so we will going to have, Also in the <button type="submit"></button> we will be using the enter as we wanted to use it all the way over here in our condition, But what it do is basically it will reload the page again we enter so, On the OnClick function of the button we will be prevent default it relaod again and again all the way.

- preventDefault() is the function that will not refresh the page again and again, it will prevent it to be reloaded again and again.

- It is necessary for us to wrap the input inside the form as we hit enter button it works fine there.

- If we enter it adds the empty list item so what we can do is to put a validation, but here we can do something really smart all the way! and that is basically to disabled the button, if there is no input inside the input box.
  <button disabled={!input}>Add Todo</button> ---- disabled={!input}

- Here instead of the html elements we will be using the Material ui elements like : Button , Input , InputLabel , FormControl , List, ListItem , ListItemText .....!

- useEffect() hook: the code in the useEffect has the dependencies and the function and the code comes when the app.js loads in.... if the dependencies are empty array but it we put any variable there whenever the variable changes it will going to be loaded again all the way!.

- delete logic using filter : // setTodos(todos.filter((item) => item !== todo));

- Json server as an api use krskte hain hm, there are actually objects in the file of the json server and it actually does is it gives us endpoints which we can actually use in our application all the way, in smaller words hardcoded backend server hota hai json server.

- Materialize library hai jo hm use krskte hain css ki jaga apne projects mein.

-  //spread operator to show the previous as well
    // setTodos([...todos, input]);    -- we don't need it here anymore! all the way over here.

- When we are adding the todo, they are going over there in the database and then the snapshot get activated as the database is updated so it returns the todos from the database and show on the screen? but the issue is we want last todo to be on the top of the list for this we need to implement the timestamp as well while adding the todo;
      - Timestamp is the time of the server at which the todo is added to the database.
      - We require timestamp of the server on our region timestamp as the timestamp can be different of regions.
      - timestamp: firebase.firestore.FieldValue.serverTimestamp()               --      this is how we get the timestamp from the server.


- If there is no collection in the database with our collection-name so it will going to generate one for us with that particular collection name for us.

- To deploy the site again after changing we will only run :
    - npm run  build
    - firebase deploy
  what this will do! is going to deploy the build that has just been created after changing!

- We can create our command for deploy in the package.json file as well.

- We are implementing a Model in the application as well over here so we can edit the todo, and when we click the edit button model appears with the input field and label of edit a todo, which when we write updates the todo all the way for us!

-     "deploy": "npm run build && firebase deploy"         -- update the script

- Every todo component must have a model attached to it, which works in such a manner that it pops for every time edit button is pressed all the way!

- To Apply a model we need to wrap the whole component into fragment so we will have model as well as list over there.  

- React Fragment: 
      React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.

- To implement the model we need states if model is true so open the model else it should not appear on the screen!
- Model will be the pop up for us when we click the edit button it pops up and there will be the state true when we click to the button therefore which helps us to show the model on the screen and we will have input field over there for us and we will going to style it sccording to our self!

- npm install @mui/styles --legacy-peer-deps          -- to install the mui/styles with the dependency && importing it from import { makeStyles } from '@mui/styles';

- Without firebase real-time database we would require websockets.io to make things clear && realtime for us.

- AWS RedShift is the database which provides terabytes of spaces to us and WallMart uses it!

- Firebase also has SQL database which has JSON tree of relations!

- SQL database has Normalization in terms of indexing and organizing data.

- NOSQL database we needs to organize and manage data by our own self! , No repeated data