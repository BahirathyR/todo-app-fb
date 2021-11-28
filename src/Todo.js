import { Avatar, List, ListItemText ,Button, Modal} from '@material-ui/core'
import React,{useState} from 'react'
import './Todo.css'
import LabIcon from './LabIcon'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'200 solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing[2,3,4]

    }
}));

export default function Todo(props) {
const classes=useStyles();
    const[open, setOpen]=useState(false)
    const[input,setInput]=useState('')//initializw todo value
    

    const handleOpen = () =>{
        setOpen(true);
    };
const update = () =>{
    //update todo newinput text
    console.log(props.todo.id,"iddddd")
    db.collection('todos').doc(props.todo.id).set({
        todo:input
    },{merge:true});
    setOpen(false)
}
// const handleClose = () =>{
//   setOpen(false)
// }

    return (
<>
<Modal
    open={open}
    onClose={e=>setOpen(false)}                     /* onClose={handleClose} */
    >
<div className={classes.paper}>
    <h1>open</h1>
    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
     {/* <button onClick={e=>setOpen(false)}>Update</button> */}
     <button onClick={update}>Update</button>

</div>
</Modal>
        <List classsName="todo-list">
            <Avatar style={{ backgroundColor: "#ff6f00" }}>
                      <LabIcon/>
                    </Avatar>
              {/* primary=(props.todo.todo) first todo- object second todo-text */}
           <ListItemText role='img' aria-label='sheep' primary={props.todo.todo}   secondary='text'/> 
           <DeleteForeverIcon onClick={event=>{
               db.collection('todos').doc(props.todo.id).delete()
           }}>Delete</DeleteForeverIcon>
           {/* <button onClick={e=>setOpen(true)}>Edit</button> */}
           <button onClick={handleOpen}>Edit</button>

           </List>
           </>
    )
}

