import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    edit: false,
    updateTitle: '',
  }

  editing = () => {
    const {todoDetails} = this.props
    this.setState({edit: true, updateTitle: todoDetails.title})
  }

  save = () => {
    this.setState({edit: false})
  }

  changeTodo = e => {
    this.setState({updateTitle: e.target.value})
  }

  render() {
    const {todoDetails, onDelete, toggleComplete} = this.props
    const {edit, updateTitle} = this.state

    return (
      <li className="card">
        {edit ? (
          <>
            <input type="text" value={updateTitle} onChange={this.changeTodo} />
            <button onClick={this.save} type="button" className="save-edit-btn">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              name={todoDetails.id}
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button
              type="button"
              onClick={this.editing}
              className="save-edit-btn"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(todoDetails.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}
export default TodoItem
