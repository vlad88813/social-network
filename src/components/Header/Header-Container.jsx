import React from 'react';
import { connect } from 'react-redux';
import { userAPI } from '../../api/api';
import { setUserData } from '../../redux/Authentication-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount(){

    userAPI.getHeaderAuth()
         .then(data => {
           
           if (data.resultCode === 0){
             let {id, email, login} = data.data;
               this.props.setUserData(id, email, login);
              }
           });
  }
  

  render() {
    return <Header {...this.props} />
  }
};



let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login,
});



export default connect(mapStateToProps,{setUserData})(HeaderContainer);