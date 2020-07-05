import React from 'react';
import './App.css';
import { Text } from './Text';
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from './ToDoItem';
import {useTodosHook} from "./useTodosHook";

const  App = () => {
    const {
        todos,
        onAdd,
        onEdit,
        onSwitch,
        onRemove
    } = useTodosHook();
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
            onEdit={onEdit}
            />
         )}
      </div>
    </div>
  );
}

export  default App;
