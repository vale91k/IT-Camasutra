import { reduxForm, reset } from 'redux-form';

const ADD_MESSAGE = "ADD-MESSAGE";


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
  messagesHistory: {
    1: [
      { id: 1, message: "Hi!", date: '9:46:19 PM' },
      { id: 2, message: "What's up?", date: '9:47:01 PM' },
      { id: 1, message: "I'am ok, and you?", date: '10:52:30 PM' },
      { id: 2, message: "Fine! thx!", date: '10:52:45 PM' },
      { id: 1, message: "See you tomorrow", date: '10:52:59 PM' },
      { id: 2, message: "Bye!", date: '10:53:34 PM' }
    ],
    2: [
      { id: 1, message: "test2", date: '9:46:19 PM' },
      { id: 2, message: 'test2test2test2', date: '9:47:01 PM' },
      { id: 1, message: "test2test2test2test2test2test2test2", date: '10:52:30 PM' },
      { id: 2, message: "test2test2test2test2", date: '10:52:45 PM' },
      { id: 1, message: "test2test2test2test2test2test2", date: '10:52:59 PM' },
      { id: 2, message: "test2", date: '10:53:34 PM' }
    ],
    3: [
      { id: 1, message: "test3", date: '9:46:19 PM' },
      { id: 2, message: "test3test3test3test3", date: '9:47:01 PM' },
      { id: 1, message: "test3test3test3test3test3test3test3te3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3tes test3test3te3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3 test3test3te3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3t3test3tesst3test3test3test3test3test3test3test3test3test3", date: '10:52:30 PM' },
      { id: 2, message: "test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3test3", date: '10:52:45 PM' },
      { id: 1, message: "test3test3", date: '10:52:59 PM' },
      { id: 2, message: "test3", date: '10:53:34 PM' }
    ],
    4: [
      { id: 1, message: "Hi!", date: '9:46:19 PM' },
      { id: 2, message: "What's up?", date: '9:47:01 PM' },
      { id: 1, message: "I'am ok, and you?", date: '10:52:30 PM' },
      { id: 2, message: "Fine! thx!", date: '10:52:45 PM' },
      { id: 1, message: "See you tomorrow", date: '10:52:59 PM' },
      { id: 2, message: "Bye!", date: '10:53:34 PM' }
    ],
    5: [
      { id: 1, message: "Hi!", date: '9:46:19 PM' },
      { id: 2, message: "What's up?", date: '9:47:01 PM' },
      { id: 1, message: "I'am ok, and you?", date: '10:52:30 PM' },
      { id: 2, message: "Fine! thx!", date: '10:52:45 PM' },
      { id: 1, message: "See you tomorrow", date: '10:52:59 PM' },
      { id: 2, message: "Bye!", date: '10:53:34 PM' }
    ],
    6: [
      { id: 1, message: "Hi!", date: '9:46:19 PM' },
      { id: 2, message: "What's up?", date: '9:47:01 PM' },
      { id: 1, message: "I'am ok, and you?", date: '10:52:30 PM' },
      { id: 2, message: "Fine! thx!", date: '10:52:45 PM' },
      { id: 1, message: "See you tomorrow", date: '10:52:59 PM' },
      { id: 2, message: "Bye!", date: '10:53:34 PM' }
    ]
    
  },
 newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 1,
        message: action.newMessageBody,
        date: action.date
      };
      return   { ...state, messagesHistory: {...state.messagesHistory, 1 :[...state.messagesHistory[1], newMessage]}  }
      
   
    }
    

     
      default: 
      return state;
  }

  
};
export const addMessageActionCreator = (newMessageBody, date) => ({ type: ADD_MESSAGE, newMessageBody, date });

export const addMessageThunk = (newMessageBody, date) => {
return (dispatch) => {
  
  dispatch(addMessageActionCreator(newMessageBody, date))
}
}
export default dialogsReducer;
