import React from 'react'
import './Todo.css'
const Todo = (props) => {
    // console.log('Todo search'+props.search)
    // console.log('Todo'+props.todoProp.task)
    let classNames = 'item';

    if(props.todoProp.completed){
        // console.log('inside if: ' + props.todoProp.completed)
        classNames += " finished";
        // console.log(classNames)
    }

    const updateCompletedlist = () => {
        props.toggleListProp(props.todoProp.id)
        // console.log('update: ' + props.todoProp.completed)
    }

    return (
        <div className={classNames} onClick = {updateCompletedlist}>
           
            <p>{props.todoProp.task}</p>
            {/* <p>{props.todoProp.id}=Date.now()</p> */}
        </div>
    );
}

export default Todo;