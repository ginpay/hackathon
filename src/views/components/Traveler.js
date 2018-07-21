import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";
import Message from "../components/Message";

class Traveler extends Component {
  render() {

    return (
      <div className="traveler row">
        <div className="col s2 m2 l2">
          <UserIcon></UserIcon>
        </div>
        <div className="col s10 m10 l10">
          <Message></Message>
        </div>
      </div>
    );
  }
}
export default Traveler