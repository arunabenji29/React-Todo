import React from 'react'

const TodoForm = (props) => {
    return (
        <div className = 'todo-area'>
            <form onSubmit ={props.addProp} >
            <input
                    placeholder='search'
                    value={props.formProp.todo.search}
                    onChange = {props.handleSearchProp}
                    name = 'task'
                />
                <input
                    placeholder='..todo'
                    value={props.formProp.todo.task}
                    onChange = {props.handleProp}
                    name = 'task'
                />
                <button onClick={props.addProp}>Add Todo</button>
                <button onClick={props.removeProp}>Clear Completed</button>
                {/* <button onClick={props.search}>Search</button>  */}
            </form>
            

        </div>
    );
}

export default TodoForm