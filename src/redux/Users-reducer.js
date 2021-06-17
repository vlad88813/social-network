const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const FETCHING = 'FETCHING';


let initialState =  {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
    
  };

const UsersReducer = (state = initialState, action) => {
//   let stateCopy = {...state};
    switch (action.type) {

        case FOLLOW:
            let newUsers = state.users.map(i => {
                if (i.id === action.userId) {
                    return {...i, fallowed: true }
                } 
                return i;
            })
            return {
                ...state,
                users: newUsers
            }
            // stateCopy.Users = [...state.Users]
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.userId){
                        return {...i, fallowed: false }
                    }
                    return i;
                })
            } 
        case SET_USERS: {
            return {...state, users: action.users} 
        }
        case SET_CURRENT_PAGE: {
            
            return {...state, currentPage:action.currentPage}
        }
        case SET_USER_TOTAL_COUNT: {

            return {...state, totalCount: action.count}
        }
        case FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: 
            return state;

    }
}

export const follow = (userId) => ({ type: FOLLOW, userId});
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({ type: SET_USER_TOTAL_COUNT, count: totalCount });
export const setIsFetching = (isFetching) => ({type:FETCHING, isFetching});

export default UsersReducer;
//профильпейдж удалил, т.к функция сразу даст что надо