import React from "react";



const SubscribeButton = ({followed, followingInProgress,id, unfollow, follow}) => {
  return (
    <div>
            {followed ? (
              <button
                disabled={followingInProgress.some((userId) => userId === id)}
                onClick={() => {
                  unfollow(id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((userId) => userId === id)}
                onClick={() => {
                  follow(id);
                }}
              >
                Follow
              </button>
            )}
          </div>
  )
}
 
export default SubscribeButton;
