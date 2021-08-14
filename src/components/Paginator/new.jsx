import React, { useEffect } from "react";
import UserItem from "../UserItem";
import Preloader from "../Preloader";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/action-creators";
import {
  unFollowUserThunk,
  followUserThunk,
  getUsersThunk,
} from "../../redux/thunk";
// MUI stuff
import Pagination from "@material-ui/lab/Pagination";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

const UsersList = () => {
  const dispatch = useDispatch();
  const {
    followingInProgress,
    users,
    totalCount,
    currentPage,
    pageSize,
    isFetching,
  } = useSelector((state) => state.usersPage);

  const pageCount = Math.ceil(totalCount / pageSize);

  const onToggleFollow = (user) => {
    user.followed
      ? dispatch(unFollowUserThunk(user))
      : dispatch(followUserThunk(user));
  };

  const usersList = users.map((user) => (
    <UserItem
      user={user}
      followingInProgress={followingInProgress}
      onToggleFollow={onToggleFollow}
    />
  ));

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize));
  }, [currentPage, dispatch, pageSize]);

  return (
    <div className="userItem">
      <span className="spanik"></span>
      <Pagination
        siblingCount={1}
        count={pageCount}
        onChange={(e, pageNum)=>{dispatch(setCurrentPage(pageNum))}}
        disabled={isFetching ? true : false}
        color="secondary"
      />
      <Grid item xs={12} md={6}>
        <div>{isFetching ? <Preloader /> : <List>{usersList}</List>}</div>
      </Grid>
    </div>
  );
};

export default UsersList;


