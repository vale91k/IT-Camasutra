import React from "react";
import ss from "./SideBar.module.css";
 import uniqueId from '../../../../node_modules/lodash/uniqueId'


const SideBar = props => {
  let sideBarDialogs = props.sidebar.map(s => (
    <div key={uniqueId()} className={ss.card}>
      <div className={ss.avatar}>
        <img src={s.avatar} />
      </div>
      <br />
      <div  className={ss.namePerson}>{s.name}</div>
    </div>
  ));

  return (
    <div className={ss.sideb}>
      <div className={ss.headerBar}>Friends</div>
      
       
<div className={ss.flexible}>

          {sideBarDialogs}
</div>
        
         
      
    </div>
  );
};
export default SideBar;
