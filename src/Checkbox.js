import React, { useState, useEffect, useContext } from 'react';
import { toDoListPropTypes } from './propTypes';
import { todosContext } from './todosContext';

export const Checkbox = ({todo, onSwitch}) => {
   const [checked, setChecked] = useState(false);
   const theme = useContext(todosContext);
   console.log(theme, 'theme');

   const onChange = event => {
      onSwitch(event.target.value);
      setChecked(!checked);
   }

   //useEffect(() => {
      //setChecked(todo.completed)
   //}, []);
 
   return <input
         type="checkbox"
         value={todo._id}
         onChange={onChange}
         {...{checked}}
      />
}

Checkbox.propTypes = toDoListPropTypes;

