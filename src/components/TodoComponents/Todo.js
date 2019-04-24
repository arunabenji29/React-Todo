import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <p>{props.todoProp.task}</p>
            {/* <p>{props.todoProp.id}=Date.now()</p> */}
        </div>
    );
}

export default Todo;