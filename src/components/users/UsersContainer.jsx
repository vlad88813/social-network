import { connect } from 'react-redux';
import React from 'react';
import { setCurrentPage, getUsersThunkCreator, deleteUsersThunkCreator, postUsersThunkCreator } from '../../redux/Users-reducer';
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
           this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        
        }


        onPageChanged = (currentPage) => {
            // this.props.setCurrentPage(currentPage);
            // this.props.setIsFetching(true);
            
            // userAPI.getUsers(currentPage,this.props.pageSize)
            //.then(data => {
                
            //     this.props.setUsers(data.items);
            //     this.props.setIsFetching(false);
                
                    
            // });
            this.props.setCurrentPage(currentPage);
            this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
            
        }

    render(){

        return <>
        {this.props.isFetching ? <Loader/> : 
        <UsersRENDER 
            users = {this.props.users}
            pageSize = {this.props.pageSize}
            totalCount = {this.props.totalCount}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            disabledButton = {this.props.StateDisabledButton}
            deleteUsersThunkCreator = {this.props.deleteUsersThunkCreator}
            postUsersThunkCreator = {this.props.postUsersThunkCreator}
            
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
        StateDisabledButton: state.usersPage.disabledButton
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
    {setCurrentPage,
    getUsersThunkCreator,
    deleteUsersThunkCreator,
    postUsersThunkCreator})(UsersContainer);
    
// connect создает контейнер 