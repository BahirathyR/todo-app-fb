import React,{useState , useEffect} from 'react';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo'
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos]=useState(['studying','cooking','developing'])
  const[input,setInput]=useState('')

  useEffect(()=>{

db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
  setTodos(snapshot.docs.map(doc =>({ 
    id: doc.id,
    todo: doc.data().todo}))) //doc.data().todo--> field name from firebase

}

  )
  },[])
  
const addtodo = (event) => {
  event.preventDefault();  //stop refreshing

  db.collection('todos').add({
    todo: input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  // setTodos([...todos , input])
  setInput('') //clear the input after click addtodo button
}


  return (
    <div className="App">
      <h1>Todo List</h1>
    {/* <input/> */}
    {/* <input value={input} onChange={event=>setInput(event.target.value)}/> */}
<FormControl>
  <InputLabel>
  💓Add Todo</InputLabel>
  <Input value={input} onChange={event=>setInput(event.target.value)}/>

  </FormControl>

    <Button disabled={!input} onClick={addtodo} variant="contained" color="primary">
    AddTodo</Button>
    <ul>
      {todos.map(todo=>(
        <Todo todo={todo}/>
      // <li>{todo}</li>
    ))}
      
    </ul>
         </div>
  );
}

export default App;
