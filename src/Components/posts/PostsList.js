import React from'react';
import classes from'./PostsList.module.css';
const PostList =(props)=> {
  return (
      <div className={classes.box} >
        <li className={classes.post}>
          <h2>{props.title}</h2>
          <p>{props.openingText}</p>
        </li>
      </div>  
      
  )
}
export default PostList;