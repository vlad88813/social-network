import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC } from '../../redux/Users-reducer';
import UsersRENDER from './UsersRENDER'


//так как connect делает контейнер, то мы перекинули и сюда нашу глязную компоненту (классовую) для выполнения запросов
//вся контейнерная логика лежит тут
class UsersContainer extends React.Component{
    //constructor(props){
    //     super(props);
    // }

        componentDidMount() {
            
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                    
            });
        
        }


        onPageChanged = (currentPage) => {
            this.props.setCurrentPage(currentPage);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                
                this.props.setUsers(response.data.items);
                
                    
            });
            

        }

    render(){

        return <UsersRENDER 
        totalCount = {this.props.totalCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        />
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
// connect создает контейнер 