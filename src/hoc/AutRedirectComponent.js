import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


let mapStateToProps = (state) => ({
    auth: state.auth.isAuth
   });



export const AutRedirectComponent = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to= {"/login"}/>

            return <Component {...this.props}/>
        }
    }


    let connectedStatePors = connect(mapStateToProps)(RedirectComponent);
    //еще одна оертка, чтобы передать только нужные ей пропсы. 
    
    return connectedStatePors;
}


//hoc дают пропсы и поведение 