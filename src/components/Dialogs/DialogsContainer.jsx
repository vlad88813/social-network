import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
      MessagesPage:state.MessagesPage,
      auth:state.auth.isAuth
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

let DialogsContainer = connect(mapStateToProps,{
  updateNewMessageBodyCreatorKEY:updateNewMessageBodyCreator,
  sendMessageCreator,
})(Dialogs);


export default DialogsContainer;
