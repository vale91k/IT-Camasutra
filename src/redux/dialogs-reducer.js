const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Valentin",
      avatar:
        "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg"
    },
    {
      id: 2,
      name: "Stanislav",
      avatar:
        "https://imgix.bustle.com/uploads/getty/2019/11/20/e2ed92cb-3320-47cc-9ca3-bc0c3c5c615e-getty-1188506982.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70"
    },
    {
      id: 3,
      name: "Peter",
      avatar:
        "https://cdn.pixabay.com/photo/2016/04/17/16/10/cat-1334970_960_720.jpg"
    },
    {
      id: 4,
      name: "Eugene",
      avatar:
        "https://media14.s-nbcnews.com/j/MSNBC/Components/Video/201905/tdy_news_grumpy_cat_190517_1920x1080.focal-760x428.jpg"
    },
    {
      id: 5,
      name: "Edward",
      avatar:
        "https://www.thehappycatsite.com/wp-content/uploads/2017/12/flat-faced-cats1.jpg"
    },
    {
      id: 6,
      name: "Ruslan",
      avatar:
        "https://www.womansworld.com/wp-content/uploads/2019/06/cat-with-flat-face.jpg?w=1024"
    }
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What's up?" },
    { id: 3, message: "I'am ok, and you?" },
    { id: 4, message: "Fine! thx!" },
    { id: 5, message: "See you tomorrow" },
    { id: 6, message: "Bye!" }
  ],
  newMessageText: ""
}


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 7,
        message: state.newMessageText
      };
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage);
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      let stateCopy = {...state}

      stateCopy.newMessageText = action.message;
      return stateCopy;
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
