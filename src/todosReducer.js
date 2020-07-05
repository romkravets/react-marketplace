import {v4 as uuidv4} from "uuid";

export const TODOS_ACTION = {
    ADD: 'add',
    COMPLETE: 'complete',
    REMOVE: 'remove',
};

export const initialState = () => {
    const todosFromStorage = localStorage.getItem('todos');
    const todoParse = JSON.parse(todosFromStorage);

    return todoParse || []
}

export const todosReducer = (todos, action) => {
    switch (action.type) {
        case TODOS_ACTION.ADD:
            return [
                ...todos,
                {
                    _id: uuidv4(),
                    text: action.text,
                    completed: false,
                }
            ];
        case TODOS_ACTION.COMPLETE:
            return  todos.map(
                todo => action._id === todo._id
                ?
                { ...todo, completed: !todo.completed }
                :  todo,
            )
        case TODOS_ACTION.REMOVE:
            return todos.filter(todo => action._id !== todo._id)
        default:
            throw  new Error();
    }
};