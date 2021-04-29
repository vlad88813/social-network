import React from 'react';
import MyPosts_style from './post.module.css';

const Post = (props) => {
  return (
     <div className={MyPosts_style.items}>
         <img src='https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png'/>    
            {props.message} 
            <div>          
          <span> like </span> {props.likeCount}
      </div>
      </div>
  )
};

export default Post;
