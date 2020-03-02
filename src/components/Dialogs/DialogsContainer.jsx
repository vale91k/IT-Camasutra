import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext, Provider} from "../../StoreContext";

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
          store.dispatch(updateNewMessageTextActionCreator(""));
        };

        let onMessageChange = body => {
          let action = updateNewMessageTextActionCreator(body);
          store.dispatch(action);
        };

        return (
          <Dialogs
            store={store}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
