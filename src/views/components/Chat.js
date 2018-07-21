import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";
import Message from "../components/Message";

class Chat extends Component {

  render() {

    const myChat =
      <div className="my-chat row">
        <div className="user-icon-wrapper">
          <UserIcon></UserIcon>
        </div>
        <div className="message-wrapper">
          <Message></Message>
        </div>
      </div>

    const yourChat =
      <div className="your-chat row">
        <div className="message-wrapper">
          <Message></Message>
        </div>
        <div className="user-icon-wrapper">
          <UserIcon></UserIcon>
        </div>
      </div>

    const chat = this.props.isMyMessage ? myChat : yourChat;

    return (
      <div className="chat row">
        {chat}
      </div>
    );
  }
}
export default Chat