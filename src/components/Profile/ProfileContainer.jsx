import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile }  from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let UserID = this.props.match.params.userID;

    if (!UserID) {
      UserID='2';
    }
      
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ UserID)
         .then(response => {
               this.props.setUserProfile(response.data) });
  
}
  



  render() {
    return <Profile {...this.props} profile ={this.props.profile}/>
  }
};



let mapStateToProps = (state) => ({
 profile: state.ProfilePage.profile
});

//строка ниже создает еще одну обертку, как connect. а Connect с той оберткой создает еще одну.  2 строки кода, две оберетки. 
let With_URL_Router = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(With_URL_Router);
