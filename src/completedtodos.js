import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CompletedTodos extends Component {
  render() {
    const {completedTodos} = this.props;
    return (
      <div>
        <h1>Completed todos</h1>
        <ol>
        {completedTodos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  return {
    completedTodos: todos.filter(todo => todo.status === 1),
  }
}

export default connect(mapStateToProps)(CompletedTodos);