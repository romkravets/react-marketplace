import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { toDoListPropTypes } from './propTypes';
import {Checkbox} from './Checkbox';
import {withCheckedStyles} from './whithCheckedStyle';
import {Text} from './Text';
import {Icon} from './Icon';

import './index.css';

export const ToDoItem = withCheckedStyles( ({todo, onSwitch, onRemove, additionalStyle}) => {
   return !!todo &&  (
      <div className="toDoItem">
         <Checkbox {...{todo, onSwitch}}/>
         {console.log(todo)}
         <Text size="10px" {...additionalStyle}>{todo.text}</Text>
         <Icon name="remove" onClick={() => onRemove(todo._id)}/>
      </div>
   )
});

ToDoItem.propTypes =  {
   ...toDoListPropTypes,
   onRemove: T.func.isRequired,
   additionalStyle: T.shape({
      color: T.string,
      textDecoration: T.string,
   })
};