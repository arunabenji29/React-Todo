// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    if (props.listProp.search !== '') {
        return (

            <div>
                {props.listProp.search.map(searchData => (
                        <Todo todoProp={searchData} toggleListProp={props.toggleProp}/>
                    )
                )}
            </div>
        );
    }
    if (props.listProp.search === '') {
        return (
            <div>
                {props.listProp.todoState.map(todoData => (
                    <Todo todoProp={todoData} toggleListProp={props.toggleProp} />
                ))}
            </div>

        );
    }

    
}

export default TodoList