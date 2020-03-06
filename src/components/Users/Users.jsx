import React from "react";
import styles from "./Users.module.css";

const Users = props => {
  if (props.users.length === 0) {
  
    props.setUsers([
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
        status: "I am the greatest showman!",
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
    )
  }
  
  return (
    <div>
      {props.users.map(x => (
        <div key={x.id}>
          <span>
            <div>
              <img className={styles.avatar} src={x.avatar} />
            </div>
            <div>
              {x.followed ? (
                <button
                  onClick={ () => {
                    props.unfollow(x.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(x.id);
                  }}
                >
                  UnFollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{x.fullName}</div>
              <div>{x.status}</div>
            </span>
            <span>
              <div>{x.location.city}</div>
              <div>{x.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
