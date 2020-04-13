import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    state: state.dialogsPage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addMessage: newMessageBody => {
      dispatch(addMessageActionCreator(newMessageBody));
    }
  };
};

compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

     withAuthRedirect
)(Dialogs);
