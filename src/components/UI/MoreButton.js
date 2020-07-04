import React, { Children } from 'react';

const MoreButton = ({onAdd, children}) => {

   return (
   <button onClick={onAdd}>{children}</button>
      )
}

export default MoreButton;