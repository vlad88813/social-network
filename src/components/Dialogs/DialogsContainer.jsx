import { connect } from 'react-redux';
import { compose } from 'redux';
import { AutRedirectComponent } from '../../hoc/AutRedirectComponent';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
      MessagesPage:state.MessagesPage,
      // auth:state.auth.isAuth
  }
};

// let mapDispatchToProps = (dispatch) =>{
//   return {
//     updateNewMessageBodyCreatorKEY: (body) => {
//       dispatch(updateNewMessageBodyCreator(body))
//     },
//     sendMessageCreator: () => {
//       dispatch(sendMessageCreator())
//     }
//   }
// };

// let AutRecirect = AutRedirectComponent(Dialogs);
// // hoc




// let DialogsContainer = connect(mapStateToProps,{
//   updateNewMessageBodyCreatorKEY:updateNewMessageBodyCreator,
//   sendMessageCreator,
// })(AutRecirect);


export default compose(
  connect(mapStateToProps,{
    updateNewMessageBodyCreatorKEY:updateNewMessageBodyCreator,
    sendMessageCreator,
  }),
  AutRedirectComponent,
)(Dialogs);
