import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };
handleFocus = (event) => event.target.select()

  deactivateEditMode = () => {
      this.setState(
          {
              editMode:false
          }
      )
  }
  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <span>
              <input autoFocus={true} onClick={this.activateEditMode} onFocus={this.handleFocus} onBlur={this.deactivateEditMode} value={this.props.status} />
            </span>
          </div>
        ) : (
          <div>
            <span onClick={this.activateEditMode} >
              {this.props.status}
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
