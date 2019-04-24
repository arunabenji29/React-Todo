import React from 'react'

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit ={props.addProp} >
                <input
                    placeholder='..todo'
                    value={props.formProp.todo.task}
                    onChange = {props.handleProp}
                    name = 'task'
                />
                <button onClick={props.addProp}>Add Todo</button>
                <button >Clear Completed</button>
            </form>
            

        </div>
    );
}
export default TodoForm