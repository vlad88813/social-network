import React from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router';
import { compose } from 'redux';
import { AutRedirectComponent } from '../../hoc/AutRedirectComponent';
import { GetStatusThunkCreator, ProfileThunkCreator, UpDateStatusThunkCreator }  from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let UserID = this.props.match.params.userID;
  

    if (!UserID) {
      UserID='2';
    }
      
    this.props.ProfileThunkCreator(UserID);
    this.props.GetStatusThunkCreator(UserID);

    // userAPI.getProfileContainer(UserID)
    //      .then(data => {
    //            this.props.setUserProfile(data) });
  
 }
  
  render() {

    return <Profile {...this.props} profile ={this.props.profile} status ={this.props.status} upDateStatus = {this.props.UpDateStatusThunkCreator}/>
  }
};


// let AuthRedirectComponent = (props) => {
//   if (!props.auth) return <Redirect to= {"/login"}/
//   return <ProfileContainer {...props}/>
// }
// теперь это делает отдельная компонента







// let AutRecirect = AutRedirectComponent(ProfileContainer);




let mapStateToProps = (state) => ({
 profile: state.ProfilePage.profile,
 status: state.ProfilePage.status
//  auth: state.auth.isAuth
});

//строка ниже создает еще одну обертку, как connect. а Connect с той оберткой создает еще одну.  2 строки кода, две оберетки. 
// let With_URL_Router = withRouter(AutRecirect));


// export default connect(mapStateToProps,{ProfileThunkCreator})(With_URL_Router);


export default compose(
  connect(mapStateToProps,{ProfileThunkCreator, GetStatusThunkCreator, UpDateStatusThunkCreator}),
  withRouter,
  AutRedirectComponent
  
)(ProfileContainer);
