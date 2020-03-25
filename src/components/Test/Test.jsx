import React from "react";
import ss from "./Test.module.css";

const Test = props => {
  
  return (
    <div>
      
        { props.isFollowed ? (
          <button
            disabled={props.isLoading.some(x => x === 1)}
            onClick={() => {
              props.isLoadingAC(true, 1);

              props.followedAC(false);

              props.isLoadingAC(false, 1);
            }}
          >
            fetching = true lol
          </button>
        ) : (
          <button
            disabled={props.isLoading.some(x => x === 1)}
            onClick={() => {
              
              props.isLoadingAC(true, 1 );
            
              props.followedAC(true);

              
             
            }}
          >
            stoit false
          </button>

        )
      }
        { props.isFollowed ? (
          <button
            disabled={props.isLoading.some(x => x === 2)}
            onClick={() => {
              props.isLoadingAC(true, 2);

              props.followedAC(false)

              .then(props.isLoadingAC(false, 2))
            }}
          >
            fetching = true lol
          </button>
        ) : (
          <button
            disabled={props.isLoading.some(x => x === 2)}
            onClick={() => {
              
              props.isLoadingAC(true, 2);
            
              props.followedAC(true);

              props.isLoadingAC(false, 2);
             
            }}
          >
            stoit false
          </button>

        )
      }
        { props.isFollowed ? (
          <button
            disabled={props.isLoading.some(x => x === 3)}
            onClick={() => {
              props.isLoadingAC(true, 3);

              props.followedAC(false);

              props.isLoadingAC(false, 3);
            }}
          >
            fetching = true lol
          </button>
        ) : (
          <button
            disabled={props.isLoading.some(x => x === 3)}
            onClick={() => {
              
              props.isLoadingAC(true, 3);
            
              props.followedAC(true);

              props.isLoadingAC(false, 3);
             
            }}
          >
            stoit false
          </button>

        )
      }
    
    </div>
  );
};
export default Test;
