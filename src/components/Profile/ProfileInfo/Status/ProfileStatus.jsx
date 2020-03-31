import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {
    
    this.setState({
      editMode: true
    });
  };
handleFocus = (event) => event.target.select()
onStatusChange = (e) => {
  this.setState(
    {
      status: e.target.value
    }
  )
}
  deactivateEditMode = (e) => {
      this.setState(
          {
              editMode:false,
             
          }
          
      )
       this.props.updateStatusThunk(e.target.value)
  }
  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <span>
              <input ref={this.statusInputRef} autoFocus={true} onClick={this.activateEditMode} onFocus={this.handleFocus} onBlur={this.deactivateEditMode} value={this.state.status} onChange={this.onStatusChange} />
            </span>
          </div>
        ) : (
          <div>
            <span onClick={this.activateEditMode} >
              {this.props.status || 'No Status'}
            </span>
          </div>
        )}

        {/* <div>
    Full Name: {props.profile.fullName}, 
    
    About Me: {props.profile.aboutMe}
    

      </div> */}
      </>
    );
  }
}
export default ProfileStatus;
