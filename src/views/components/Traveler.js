import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";
import Message from "../components/Message";

class Traveler extends Component {
  render() {

    return (
      <div className="traveler row">
        <div className="user-icon-wrapper">
          <UserIcon></UserIcon>
        </div>
        <div className="message-wrapper">
          <Message></Message>
        </div>
      </div>
    );
  }
}
export default Traveler