import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { toDoListPropTypes } from './propTypes';
import {Checkbox} from './Checkbox';
import {Text} from './Text';
import {Icon} from './Icon';

import './index.css';

export const ToDoItem = ({todo, onSwitch, onRemove}) => {
   return !!todo &&  (
      <div className="toDoItem">
         <Checkbox {...{todo, onSwitch}}/>
         {console.log(todo)}
         <Text size="10px" color={todo.completed ? 'red' : 'black'}>{todo.text}</Text>
         <Icon name="remove" onClick={() => onRemove(todo._id)}/>
      </div>
   )
}

ToDoItem.propTypes =  {
   ...toDoListPropTypes,
   onRemove: T.func.isRequired,
};