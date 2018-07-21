import React, { Component } from 'react'
import userIcon from '../../img/user-icon.jpg'

class UserIcon extends Component {
  render() {

    return (
      <div className="user-icon">
        <div className="icon-image-wrapper">
          <img className="circle responsive-img z-depth-1" src={userIcon}></img>
        </div>
        <div className="user-name">User name</div>
      </div>
    );
  }
}
export default UserIcon