import React from "react";
import ss from "./Test.module.css";

const Test = (props) => {
  
let setToTrue = () => {
  props.isLoadingAC(true)
  
  props.fetching(true)
setTimeout(() => {
  props.isLoadingAC(false)
}, 5000);
}
let setToFalse = () => {
  props.isLoadingAC(true)
  
  props.fetching(false)
setTimeout(() => {
  props.isLoadingAC(false)
}, 5000);
}
  return (
  <div >
    {props.isFetching ? 
   (<button disabled={props.isLoading} onClick={setToFalse}>stoit True, budet false</button>) : (<button disabled={props.isLoading} onClick={setToTrue}>stoit false, budet true</button>) }
   
  </div>
  )
};
export default Test;
