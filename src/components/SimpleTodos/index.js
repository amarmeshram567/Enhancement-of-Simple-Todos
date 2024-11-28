import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
        completed: false,
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
        completed: false,
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
        completed: false,
      },
      {
        id: 6,
        title: 'Fix the production issue',
        completed: false,
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
        completed: false,
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
        completed: false,
      },
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  addTodo = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  changeTodo = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onDelete = id => {
    this.setState(prevState => {
      const updatedTodoList = prevState.todoList.filter(todo => todo.id !== id)
      return {todoList: updatedTodoList}
    })
  }

  toggleComplete = id => {
    this.setState(prevState => {
      const updatedTodoList = prevState.todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      )
      return {todoList: updatedTodoList}
    })
  }

  render() {
    const {todoList, newTodoCount, newTodoTitle} = this.state
    return (
      <div className="bg-container">
        <div className="todo-card">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              className="input"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.changeTodo}
              placeholder="Enter todo title"
            />
            <input
              type="number"
              className="input"
              name="newTodoCount"
              value={newTodoCount}
              onChange={this.changeTodo}
              placeholder="Enter number of todos"
            />
            <button onClick={this.addTodo} type="button" className="add-button">
              Add
            </button>
          </div>
          <ul className="list-container">
            {todoList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                todoDetails={eachItem}
                onDelete={this.onDelete}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
