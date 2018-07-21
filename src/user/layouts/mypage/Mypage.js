import React, { Component } from 'react'
import Navbar from "../../ui/Navbar";

class Mypage extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="mypage">
        <Navbar></Navbar>
        <div className="container">
          <h1>My page</h1>
        </div>
      </main>
    )
  }
}

export default Mypage
