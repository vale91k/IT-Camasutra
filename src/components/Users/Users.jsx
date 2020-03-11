import React from "react";
import styles from "./Users.module.css";
import * as Axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {


componentDidMount() {
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
        this.props.setUsers(Response.data.items)
      })
    }


   getUsers = () => {

    
  }
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>users?</button>
        {this.props.users.map(x => (
          <div key={x.id} className={styles.userBar}>
            <span className={styles.leftPart}>
              <div >
                <img className={styles.avatar} src={x.photos.small != null ? x.photos.small : userPhoto} />
              </div>
              <div >
                {x.followed ? (
                  <button
                    onClick={ () => {
                      this.props.unfollow(x.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(x.id);
                    }}
                  >
                    UnFollow
                  </button>
                )}
              </div>
              {/* ! хардкодим 1 - аватарку, 2 - город, 3 - страну */}
            </span>
            <span className={styles.rightBar}>
              <span className={styles.leftSideBar}>
                <div className={styles.fullName}>{x.name}</div>
                <div className={styles.status}>{x.status}</div>
              </span>
              <span className={styles.rightsideBar}>
                <div className={styles.city}>mgn</div>
                <div className={styles.country}>russia</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
