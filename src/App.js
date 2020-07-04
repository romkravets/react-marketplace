import React, {useState} from 'react';
import { v4 as uuidv4 }  from 'uuid';
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
         _id: uuidv4(),
         text,
         completed: false,
      }
   ])

   const onSwotch = todoId =>
   setTodos(
      todos.map(
         todo => todoId === todo._id
            ?
               { ...todo, completed: !todo.completed }
            :  todo,
            ),
   );

   const onRemove = todoId => setTodos(
      todos.filter(todo => todoId !== todo._id),
   );

  return (
    <div className="application">
      <Text size="32px">Todos</Text>
      <ToDoInput onAdd={onAdd}/>
      <div className="toDoList">
         {todos.map(
            todo => <ToDoItem
            key={todo._id}
            {...{todo}}
            onSwitch={onSwotch}
            onRemove={onRemove}
            />
         )}
      </div>
    </div>
  );
}

export default App;
