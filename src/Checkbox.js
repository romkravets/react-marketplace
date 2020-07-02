import React, { useState, useEffect } from 'react';
import { toDoListPropTypes } from './propTypes';

export const Checkbox = ({todo, onSwitch}) => {
   const [checked, setChecked] = useState(false);

   const onChange = event => {
      onSwitch(event.target.value);
      setChecked(!checked);
   }

   useEffect(() => {
      setChecked(todo.completed)
   }, []);
 
   return <input
         type="checkbox"
         value={todo._id}
         onChange={onChange}
         {...{checked}}
      />
}

Checkbox.propTypes = toDoListPropTypes;

