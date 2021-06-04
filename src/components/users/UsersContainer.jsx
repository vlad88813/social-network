import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/Users-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
// не понимаю путь выше 
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
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Users);