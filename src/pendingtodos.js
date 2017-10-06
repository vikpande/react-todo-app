import React, { Component } from 'react'
import { connect } from 'react-redux';
import {completeTodo} from './actions/completetodos';

export class PendingTodos extends Component {
  render() {
    const {pendingTodos, completeTodo} = this.props;
    return (
      <div>
        <h1>Pending todos</h1>
        <table>
        {pendingTodos.map(todo => (
            <tr key={todo.id}>
                <td>{todo.title}</td>
                
                <td><button onClick={() => completeTodo(todo.id)}>Complete</button></td>
            </tr>
        ))}
        </table>
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  return {
    pendingTodos: todos.filter(todo => todo.status === 0),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    completeTodo: (id) => dispatch(completeTodo(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingTodos);