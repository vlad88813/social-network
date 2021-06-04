import { connect } from 'react-redux';
import {upDateNewPostActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    postData: state.ProfilePage.postData,
    newPostText:state.ProfilePage.newPostText
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = upDateNewPostActionCreator(text);
      dispatch(action);
        // функцию выше мы передаем через пропсы как updateNewPostText
  // для того чтобы она создала экшен и добавиа в стейт
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
