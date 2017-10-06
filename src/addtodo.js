import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addTodo} from './actions/addtodo';

export class AddTodo extends Component {
  render() {
    const {addTodo} = this.props;
    return (
      <div>
        <input type="text" ref="todoTitle" />
        <button onClick={() => addTodo(this.refs.todoTitle.value)}>Add Todo</button>
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title) => dispatch(addTodo(title))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);