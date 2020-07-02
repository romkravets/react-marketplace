import React, {useState} from 'react';
import uuid from 'uuid/v4';
import logo from './logo.svg';
import './App.css';
import { Text } from './Text';
import { ToDoInput } from './ToDoInput';
import { Icon } from './Icon';
import { ToDoItem } from './ToDoItem';

function App() {
   const [todos, setTodos] = useState([]);

   const onAdd = text => setTodos([
      ...todos,
      {
         _id: uuid(),
         text,
         completed: false,
      }
   ])


  return (
    <div className="application">
      <Text size="32px">Todos</Text>
      <ToDoInput onAdd={onAdd}/>
      <div className="toDoList">
         {todos.map(
            todo => <ToDoItem
            {...{todo}}
            onSwitch={todo => console.log(todo)}
            />
         )}
      </div>
    </div>
  );
}

export default App;
