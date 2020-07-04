import React from 'react';

const PostListItem = (props) => {
   return (
      <div key={props.post.id}>
         <h2>{props.post.title}</h2>
         <div>{props.post.body}</div>
      </div>
   )
}

export default PostListItem;