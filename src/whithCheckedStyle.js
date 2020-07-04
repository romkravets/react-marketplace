import React from 'react';

export const withCheckedStyles = WrappedComponent => props => {
   const {todo: {completed}} = props;
   const additionalStyle = completed ? {
      color: 'red',
      textDecoration: 'line-through'
   } : {};
   return <WrappedComponent {...{additionalStyle, ...props}} />
};