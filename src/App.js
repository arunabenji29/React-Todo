import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoState: todos,
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

  
  addTodo = event => {
    event.preventDefault();

    const newData = {
      task :this.state.todo.task, 
      completed:false,
      id:Date.now()
    };

    console.log(newData)

    this.setState({
      
      todoState: [...this.state.todoState, newData],
      todo: {
        task: '',
      }
    });
  };

  toggleComplete = (id) => {
    return (
      this.setState({
        todoState: this.state.todoState.map(item =>
          item.id === id ? {...item, completed: !item.completed } : item
          )
      })

    );
  };

  removeTodo = () => {
    return (
      this.setState({
        todoState:this.state.todoState.filter(item => !item.completed)
      })
    );
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo App</h1>
        <TodoList listProp={this.state.todoState} toggleProp = {this.toggleComplete}/>
        <TodoForm formProp={this.state}
          addProp={this.addTodo}
          handleProp={this.handleChange} 
          removeProp = {this.removeTodo}
          />
      </div>
    );
  }
}

export default App;
