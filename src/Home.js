import React, { Component } from 'react';
import PendingTodos from './pendingtodos';
import { Link } from 'react-router-dom';
import AddTodo from './addtodo';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PendingTodos/>
        <AddTodo/>
        <Link to='/completed'>Show completed</Link>
        </div>
    )
  }
}