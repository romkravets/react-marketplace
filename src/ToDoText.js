import React, {useState} from 'react';
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";

export const ToDoText = ({todo, onEdit, additionalStyle}) => {
    const  [isEditeble, setIsEditeble] = useState(false);

    const onClick = () => setIsEditeble(true);

    const onSaveChanges = text => {
        setIsEditeble(false);
        onEdit({...todo, text})
    }

    return isEditeble
        ?
            <ToDoInput onAdd={onSaveChanges} initialValue={todo.text}/>
        :
        ( <Text size="10px" {...additionalStyle} onClick={onClick}>
            {todo.text}
          </Text>)
}