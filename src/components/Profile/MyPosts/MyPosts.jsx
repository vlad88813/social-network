import React from 'react';
import MyPosts_style from './MyPosts.module.css';
import Post from './Post/post';



const MyPosts = (props) => {
  
  let postElements = 
      [...props.postData]
      .reverse()
      .map( p => <Post message={p.message} likeCount= {p.likeCount} key= {p.id}/> )


  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
  <div className={MyPosts_style.post}>
      <h3> my post </h3>
    <div>
        <div>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
      <button onClick={ onAddPost }>Add post</button>
      <button>remove</button>
        </div>
     
  </div>
     <div className={MyPosts_style.post}>
        { postElements }
     </div>
  
  </div>
  )
};

export default MyPosts;
