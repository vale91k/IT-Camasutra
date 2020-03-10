import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        {
          id: 1,
          message: "It's my first post!",
          likeCount: 12,
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/British_shorthair_%E2%80%A2_%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%285295667021%29.jpg"
        },
        {
          id: 2,
          message: "Congratulations!",
          likeCount: 3,
          avatar:
            "https://kittentoob.com/wp-content/uploads/2018/04/British-Shorthair-1-750x419.jpg"
        }
      ],
      newPostText: ""
    },
    sidebar: [
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
      }
    ],
    userPage: [
      {
        id: 1,
        followed: true,
        fullName: "Valentin",
        status: "I am a pokerman",
        location: { city: "Magnitogorsk", country: "Russia" },
        avatar:
          "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg"
      },
      {
        id: 2,
        followed: true,
        fullName: "Stanislav",
        status: "I am a cocorouch",
        location: { city: "Sibai", country: "Russia" },
        avatar:
          "https://imgix.bustle.com/uploads/getty/2019/11/20/e2ed92cb-3320-47cc-9ca3-bc0c3c5c615e-getty-1188506982.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70"
      },
      {
        id: 3,
        followed: true,
        fullName: "Peter",
        status: "I am a showman!",
        location: { city: "St.Piterburg", country: "Russia" },
        avatar:
          "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg"
      },
      {
        id: 4,
        followed: false,
        fullName: "Eugene",
        status: "I am a businessman",
        location: { city: "Paris", country: "France" },
        avatar:
          "https://media14.s-nbcnews.com/j/MSNBC/Components/Video/201905/tdy_news_grumpy_cat_190517_1920x1080.focal-760x428.jpg"
      },
      {
        id: 5,
        followed: false,
        fullName: "Edward",
        status: "O_o",
        location: { city: "Magnitogorsk", country: "Russia" },
        avatar:
          "https://www.thehappycatsite.com/wp-content/uploads/2017/12/flat-faced-cats1.jpg"
      },
      {
        id: 6,
        followed: false,
        fullName: "Ruslan",
        status: "L000l",
        location: { city: "Magnitogorsk", country: "Russia" },
        avatar:
          "https://www.womansworld.com/wp-content/uploads/2019/06/cat-with-flat-face.jpg?w=1024"
      }
    ]
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель\observer
  }
};

export default store;

window.state = store._state;
