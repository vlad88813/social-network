import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, setIsFetching } from '../../redux/Users-reducer';
import UsersRENDER from './UsersRENDER';
// import PreLoader from '../../assets/img/loader.gif';
import Loader from '../loader/loader_1';


//так как connect делает контейнер, то мы перекинули и сюда нашу глязную компоненту (классовую) для выполнения запросов
//вся контейнерная логика лежит тут
class UsersContainer extends React.Component{
    //constructor(props){
    //     super(props);
    // }

        componentDidMount() {
            this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                    
            });
        
        }


        onPageChanged = (currentPage) => {
            this.props.setCurrentPage(currentPage);
            this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
                
                    
            });
            
        }

    render(){
//<img src={PreLoader}/>

        return <>
        {this.props.isFetching ? <Loader/> : <UsersRENDER 
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
             />}
            {/* <UsersRENDER 
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
             /> */}
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(isFetchingAC(isFetching))

//         }

//     }
// }

// export default connect(mapStateToProps, 
//     {follow: followAC,
//     unfollow: unfollowAC,
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     setIsFetching: isFetchingAC})(UsersContainer);
//если удалить AC ТО ключ-значение будут совпадать и значит мы можем писать один раз

export default connect(mapStateToProps, 
    {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching})(UsersContainer);
    
// connect создает контейнер 