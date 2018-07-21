import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";

class UserCard extends Component {
  render() {

    return (
      <div className="user-card z-depth-1 row">
        <div className="col s3 m3 l3">
          <UserIcon></UserIcon>
        </div>
        <div className="col s9 m9 l9">
          <label>Total point</label>
          1,000 ginpay
        </div>
      </div>
    );
  }
}
export default UserCard