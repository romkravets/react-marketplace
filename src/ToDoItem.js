import React from 'react';
import T from 'prop-types';
import { toDoListPropTypes } from './propTypes';
import {Checkbox} from './Checkbox';
import {withCheckedStyles} from './whithCheckedStyle';
import {Icon} from './Icon';

import './index.css';
import {ToDoText} from "./ToDoText";

export const ToDoItem = withCheckedStyles( ({todo, onSwitch, onRemove, onEdit, additionalStyle}) => {
   return !!todo &&  (
      <div className="toDoItem">
         <Checkbox {...{todo, onSwitch}}/>
         <ToDoText {...{todo, additionalStyle, onEdit}}/>
         <Icon name="remove" onClick={() => onRemove(todo._id)}/>
      </div>
   )
});

ToDoItem.propTypes =  {
   ...toDoListPropTypes,
   onRemove: T.func.isRequired,
    onEdit:  T.func.isRequired,
   additionalStyle: T.shape({
      color: T.string,
      textDecoration: T.string,
   })
};