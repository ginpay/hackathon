import React, { Component } from 'react'
import Chat from "../components/Chat";
import SimpleButton from "../components/SimpleButton";
import {Input, Icon, Row} from 'react-materialize'
import axios from 'axios';
import api from '../../../config/api'
// import {ginpay} from '../../util/ginpay'

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

  isMyMessage(userId){
    return this.props.authData.id == userId
  }

  render() {

    return (
      <div className="chats">
        <div className="chat-box">
          {/*<Chat isMyMessage={this.isMyMessage(data.user_id)}></Chat>*/}
        </div>
        <div className="chat-form row">
          <Input type='textarea' />
          <Icon>send</Icon>
        </div>
        <SimpleButton label="Reward"></SimpleButton>
      </div>
    );
  }
}
export default Chats