import React, {Fragment} from 'react';

import T from 'prop-types';

export const Body = ({todoList}) => (
   <Fragment>
      {todoList.map(todo => <div key={todo}>{todo}</div>)}
   </Fragment>
)

// export class Body extends React.Component {
//    render() {
//      return (
//        <Fragment>
//           {this.props.todoList.map(todo => <div key={todo}>{todo}</div>)}
//        </Fragment>
//      )
//    }
//  }

Body.defaultProps = {todoList: []};
Body.displayName = 'TodoList';
Body.propTypes = {todoList: T.arrayOf(T.string)};