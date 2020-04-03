import React from "react";
import ss from "./Test.module.css";
import ButtonsWithFollow from "./ButtonsWithFollow/ButtonsWithFollow";

const Test = props => {
  return (
    <div>
      <ButtonsWithFollow
        followedAC={props.followedAC}
        isFollowed={props.isFollowed}
        isLoading={props.isLoading}
        isLoadingAC={props.isLoadingAC}
        test={props.test}
      />
      <input autoFocus={true} type="text" />

      <input autoFocus={true} value="tex2t" />
      <input autoFocus={true} value="text" />
    </div>
  );
};
export default Test;
