import React from 'react';
import Profile_Info from '../Profile_info/Profile_info';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return <div>
       <Profile_Info profile={props.profile} />
       <MyPostsContainer store={props.store}/>
  </div>
};

export default Profile;
