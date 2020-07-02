import React, { useState, useEffect } from 'react';
import { toDoListPropTypes } from './propTypes';
import {Checkbox} from './Checkbox';
import {Text} from './Text';
import {Icon} from './Icon';

import './index.css';

export const ToDoItem = ({todo, onSwitch}) => {
   return (
      <div className="toDoItem">
         <Checkbox {...{todo, onSwitch}}/>
         <Text size="10px">{todo.text}</Text>
         <Icon name="remove"/>
      </div>
   )
}

ToDoItem.propTypes = toDoListPropTypes;