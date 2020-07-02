import React, { useState, useEffect } from 'react';
import T from 'prop-types';

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

Checkbox.propsTyes = {
   todo: T.shepe({
      _id: T.string.isRequired,
      text: T.string.isRequired,
      completed: T.bool.isRequired,
   }).isRequired,
}