const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.message;
      return state;
      default: 
      return state;
  }

  
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = message => ({ 
  type: UPDATE_NEW_MESSAGE_TEXT,
  message: message
});
export default dialogsReducer;
