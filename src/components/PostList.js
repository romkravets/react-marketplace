import React from 'react';
import PostListItem from './PostListItem ';
import MoreButton from './UI/MoreButton';



const PostList = (props) => {

   return (
         <div className="post-items">
         {props.posts.map( post => {
            return (
            <PostListItem {...{post}}/>
            )
         })
         }
         <MoreButton onAdd={props.onAdd}>Add More</MoreButton>
         </div>
      )
}

export default PostList;