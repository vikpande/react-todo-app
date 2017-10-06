export const COMPLETE_TODO = 'COMPLETE_TODO';

export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}