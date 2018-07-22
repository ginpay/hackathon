import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";

class UserCard extends Component {
  render() {

    return (
      <div className="user-card z-depth-1 row">
        <div className="col s3 m3 l3">
          <UserIcon></UserIcon>
        </div>
        <div className="col s2 m2 l2 right-align">
          <label>Total point</label>
        </div>
        <div className="col s7 m7 l7 left-align ginpay">
          1,000<span>ginpay</span>
        </div>
      </div>
    );
  }
}
export default UserCard