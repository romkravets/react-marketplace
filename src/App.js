import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from './Text';
import { ToDoInput } from './ToDoInput';
import { Icon } from './Icon';
import { ToDoItem } from './ToDoItem';

function App() {
  return (
    <div className="application">
      <Text size="32px">Todos</Text>
      <ToDoInput onAdd={todo => console.log(todo)}/>
      <ToDoItem 
         todo={{ _id: 'test', text: "React", completed: false }}
         onSwitch={todo => console.log(todo)}
      />
    </div>
  );
}

export default App;
