import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
console.log(props.totalUsersCount)

let pages = [];
for (let i =1; i <= pagesCount; i++) {
  pages.push(i)
}
  return (
  <div>
        <div>
          {pages.map(i => {
             if ( i < 6 || i> pages.length -4 ) {

               return (<span 
                onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i && styles.selectedPage}>{i}</span>
                )
               }})}
            
        </div>
        
        {props.users.map(x => (
          <div key={x.id} className={styles.userBar}>
            <span className={styles.leftPart}>
              <div >
                <img className={styles.avatar} src={x.photos.small != null ? x.photos.small : userPhoto} />
              </div>
              <div >
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
                  )
        
}

export default Users;