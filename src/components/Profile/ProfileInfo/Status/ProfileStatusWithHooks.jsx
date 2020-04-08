import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  
  
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

 useEffect( () => {setStatus(props.status)}, [props.status])

  const activateEditMode =  ()=> {
    setEditMode(true)
  }
  const deactivateEditMode =  (e)=> {
    setEditMode(false)
    props.updateStatusThunk(e.target.value)
  }
  let handleFocus = (event) => event.target.select()
  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }
  return (
    <>
      {editMode ? (
          <div>
            <span>
              <input  autoFocus={true} onClick={activateEditMode} onFocus={handleFocus} onBlur={deactivateEditMode} value={status} onChange={onStatusChange} />
            </span>
          </div>
        ) : (
          <div>
            <span onClick={activateEditMode} >
              {status || 'No Status'}
            </span>
          </div>
        )}
    </>
  );
};

export default ProfileStatusWithHooks;
