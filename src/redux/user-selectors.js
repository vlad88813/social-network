// import { createSelector } from "reselect";

// export const getUsersSuperSelector = createSelector(getUsers,(users) => {
//     return users.filter(i => true);
// })


export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}


export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getDisabledButton = (state) => {
    return state.usersPage.disabledButton;
}