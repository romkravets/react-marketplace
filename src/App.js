import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from './Text';
import { ToDoInput } from './ToDoInput';
import { Icon } from './Icon';

function App() {
  return (
    <div className="application">
      <Text size="32px">Todos</Text>
      <ToDoInput onAdd={todo => console.log(todo)}/>
      <Icon name="remove" color="#000"/>
    </div>
  );
}

export default App;
