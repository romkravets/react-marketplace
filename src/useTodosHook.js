import {useEffect, useReducer} from "react";
import {initialState, TODOS_ACTION, todosReducer} from "./todosReducer";

export  const  useTodosHook = () => {
    const [todos, dispatch] = useReducer(todosReducer, initialState());

    const onAdd = text => dispatch({
        text,
        type: TODOS_ACTION.ADD,
    });

    const onSwitch = _id => dispatch({
        _id,
        type: TODOS_ACTION.COMPLETE,
    });

    const onRemove = _id => dispatch({
            _id,
            type: TODOS_ACTION.REMOVE
        }
    );

    useEffect(() => {
        const todosStringified = JSON.stringify((todos));
        localStorage.setItem('todos', todosStringified);
    }, [todos]);

    return {
        todos,
        onAdd,
        onSwitch,
        onRemove
    }
};