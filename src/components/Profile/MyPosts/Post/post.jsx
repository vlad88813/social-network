import React from 'react';
import MyPosts_style from './Post.module.css';

const Post = (props) => {
  return (
     <div className={MyPosts_style.items}>
         <img src='https://www.freelancejob.ru/upload/131/5092087670389.png'/>    
            {props.message}            
          <span> like </span> {props.likeCount}
      </div>
  )
};

export default Post;
