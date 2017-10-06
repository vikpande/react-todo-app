import { ADD_TODO } from '../actions/addtodo';
import { COMPLETE_TODO } from '../actions/completetodos';

const initialTodos = [
    {id: 1, title: "Do react", status: 0},
    {id: 2, title: "Do redux", status: 1},
    {id: 3, title: "Do JS", status: 1},
    {id: 4, title: "Do bootstrap", status: 0}
  ];

export default function todos(state = initialTodos, action) {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                id: state.length + 1,
                title: action.payload,
                status: 0
            };
            return [ ...state, todo];
        case COMPLETE_TODO:
            return state.map(todo => (todo.id === action.payload) ? {...todo, status: 1} : todo);
        default:
            return state;
    }
}