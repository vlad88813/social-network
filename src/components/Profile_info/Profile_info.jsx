import React from 'react';
import profile_inf_style from './Profile_info.module.css';

const Profile_Info = () => {
  return <div>
    <div>
        <img src='https://moya-planeta.ru/upload/images/xl/12/74/1274272b44a29b045a4466d1cdf2ab79.jpg'/>
    </div>
  <div className={profile_inf_style.item}>
    ava + description
  </div>

  </div>
};

export default Profile_Info;
