// import React from 'react';
// import * as axios from 'axios'; 
// import UsersRENDER from './UsersRENDER';
// // class component 
// // она делает запросы на сервер и вызывает чистую компоненту для отрисовки 
// class Users extends React.Component{
//     //constructor(props){
//     //     super(props);
//     // }

//         componentDidMount() {
            
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
                
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount);
                    
//             });
        
//         }


//         onPageChanged = (currentPage) => {
//             this.props.setCurrentPage(currentPage);
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
                
//                 this.props.setUsers(response.data.items);
                
                    
//             });
            

//         }

//     render(){

//         return <UsersRENDER 
//         totalCount = {this.props.totalCount}
//         pageSize = {this.props.pageSize}
//         currentPage = {this.props.currentPage}
//         onPageChanged = {this.onPageChanged}
//         users = {this.props.users}
//         unfollow = {this.props.unfollow}
//         follow = {this.props.follow}
//         />
//     }
// }

// export default Users;