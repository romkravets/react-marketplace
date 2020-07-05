import React, { useEffect, useReducer} from 'react';
import { v4 as uuidv4 }  from 'uuid';
import logo from './logo.svg';
import './App.css';
import { Text } from './Text';
import { ToDoInput } from './ToDoInput';
import { Icon } from './Icon';
import { ToDoItem } from './ToDoItem';
import {todosReducer, initialState, TODOS_ACTION} from "./todosReducer";

function App() {


   const [todos, dispatch] = useReducer(todosReducer, initialState());

   const onAdd = text => dispatch({
       text,
       type: TODOS_ACTION.ADD,
   })

   const onSwitch = _id => dispatch({
       _id,
       type: TODOS_ACTION.COMPLETE,

   })
   const onRemove = _id => dispatch({
       _id,
       type: TODOS_ACTION.REMOVE
       }
   );

   useEffect(() => {
       const todosStringified = JSON.stringify((todos));
       localStorage.setItem('todos', todosStringified);
   }, [todos]);

  return (
    <div className="application">
      <Text size="32px">Todos</Text>
      <ToDoInput onAdd={onAdd}/>
      <div className="toDoList">
         {todos.map(
            todo => <ToDoItem
            key={todo._id}
            {...{todo}}
            onSwitch={onSwitch}
            onRemove={onRemove}
            />
         )}
      </div>
    </div>
  );
}

export default App;
