import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { Logout } from '../../redux/Authentication-reducer';



class HeaderContainer extends React.Component {


  render() {
    return <Header {...this.props} Logout ={this.props.Logout}/>
  }
};


let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps,{Logout})(HeaderContainer);