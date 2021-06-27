import { connect } from 'react-redux';
import React from 'react';
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, setIsFetching, setDisabledButton } from '../../redux/Users-reducer';
import UsersRENDER from './UsersRENDER';
// import PreLoader from '../../assets/img/loader.gif';
import Loader from '../loader/loader_1';
import { userAPI } from '../../api/api';


//так как connect делает контейнер, то мы перекинули и сюда нашу глязную компоненту (классовую) для выполнения запросов
//вся контейнерная логика лежит тут
class UsersContainer extends React.Component{
    //constructor(props){
    //     super(props);
    // }

        componentDidMount() {
            this.props.setIsFetching(true);
            
            userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setIsFetching(false);
                    
            });
        
        }


        onPageChanged = (currentPage) => {
            this.props.setCurrentPage(currentPage);
            this.props.setIsFetching(true);
            
            userAPI.getUsers(currentPage,this.props.pageSize).then(data => {
                
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
                
                    
            });
            
        }

    render(){

        return <>
        {this.props.isFetching ? <Loader/> : 
        <UsersRENDER 
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            setDisabledButton = {this.props.setDisabledButton}
            disabledButton = {this.props.disabledButton}
            
             />}
            
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disabledButton: state.usersPage.disabledButton
    }
}
//опять забыл как раб mapStateToProps
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
    setIsFetching,
    setDisabledButton})(UsersContainer);
    
// connect создает контейнер 