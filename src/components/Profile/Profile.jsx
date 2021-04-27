import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import profile_style from './Profile.module.css';

const Profile = () => {
  return <div className={profile_style.content}>
    <div>
        <img src='https://moya-planeta.ru/upload/images/xl/12/74/1274272b44a29b045a4466d1cdf2ab79.jpg'/>
  </div>
  <div className={profile_style.item}>
    ava + description
  </div>
    <MyPosts />
  </div>
};

export default Profile;
