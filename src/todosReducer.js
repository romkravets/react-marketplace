import {v4 as uuidv4} from "uuid";

export const TODOS_ACTION = {
    ADD: 'add',
    COMPLETE: 'complete',
    REMOVE: 'remove',
    EDIT: 'edit',
};

export const initialState = () => {
    const todosFromStorage = localStorage.getItem('todos');
    const todoParse = JSON.parse(todosFromStorage);

    return todoParse || []
}

export const todosReducer = (todos, action) => {
    const {type, _id, text, newTodo} = action;

    switch (type) {
        case TODOS_ACTION.ADD:
            return [
                ...todos,
                {
                    _id: uuidv4(),
                    text: text,
                    completed: false,
                }
            ];
        case TODOS_ACTION.COMPLETE:
            return  todos.map(
                todo => _id === todo._id
                ?
                { ...todo, completed: !todo.completed }
                :  todo,
            )
        case TODOS_ACTION.REMOVE:
            return todos.filter(todo => _id !== todo._id)
        case TODOS_ACTION.EDIT:
            return todos.map(
                todo => todo._id === newTodo._id
                    ? newTodo
                    : todo)
        default:
            throw  new Error();
    }
};