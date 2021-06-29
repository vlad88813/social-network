import React from 'react';
import { connect } from 'react-redux';
import { AuthenticationThunkCreator } from '../../redux/Authentication-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount(){
    this.props.AuthenticationThunkCreator();  
  }
  

  render() {
    return <Header {...this.props} />
  }
};


let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps,{AuthenticationThunkCreator})(HeaderContainer);