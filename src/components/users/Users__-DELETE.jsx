// import React from 'react';
// import styles from './Users.module.css';
// import * as axios from 'axios'; 
// import userIMG from '../../assets/img/user_logo.jpg';

// const Users = (props) => {
//     let getUsers = () => {
//     if (props.users.length === 0){

//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(response => {
            
//             props.setUsers(response.data.items);
                
//         });

//         // props.setUsers( [
//         //        { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:false, fullName: 'Vlad', status: 'i am a boss', location: {city: 'Minsk', cantry: 'belarus'} },
//         //        { id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:true, fullName: 'Dima', status: 'I love e34',location: {city: 'Voronech', cantry: 'Russia'} },
//         //        { id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:false, fullName: 'Olga', status: 'I love e39',location: {city: 'Kiev', cantry: 'Ukraine'} },
//         //     ]
        
//     }
// }
//     return <div>
//         {/* <div>
//             <span>1</span>
//             <span>2</span>
//             <span>3</span>
//         </div> */}
//         <button onClick ={getUsers}>Get Users</button>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small != null ? u.photos.small: userIMG} className={styles.userPhoto}/>
//                     </div>
//                     <div>
//                         {u.fallowed
//                         ?<button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
//                         :<button onClick={() => {props.follow(u.id)}}>Follow</button>}
//                         {/* <button>Follow</button> */}
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.cantry'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>
 
// }

// export default Users;