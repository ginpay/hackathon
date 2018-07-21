import React, { Component } from 'react'
import Chat from "../components/Chat";
import {Input, Icon, Row} from 'react-materialize'
import axios from 'axios';
import api from '../../../config/api'

class Chats extends Component {

  state = {
    chats: []
  }

  componentDidMount() {
    axios.get(`${api.API_ORIGIN}chats`)
      .then(res => {
        const chats = res.data;
        this.setState({ chats });
      })
  }

  render() {

    return (
      <div className="chats">
        <div className="chat-box">
          <Chat isMyMessage={true}></Chat>
          <Chat isMyMessage={false}></Chat>
        </div>
        <div className="chat-form row">
          <Input type='textarea' />
          <Icon>send</Icon>
        </div>
      </div>
    );
  }
}
export default Chats