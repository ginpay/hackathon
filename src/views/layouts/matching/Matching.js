import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import UserIcon from "../../components/UserIcon";
import Message from "../../components/Message";

class Matching extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="matching">
        <Navbar></Navbar>
        <div className="container">
          <h2>Matching</h2>
          <div className="traveler row">
            <div className="col s2 m2 l2">
              <UserIcon></UserIcon>
            </div>
            <div className="col s10 m10 l10">
              <Message></Message>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Matching
