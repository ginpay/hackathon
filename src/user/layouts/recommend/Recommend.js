import React, { Component } from 'react'
import Navbar from "../../ui/Navbar";

class Recommend extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="matching">
        <Navbar></Navbar>
        <div className="container">
          <h1>Wish list of travelers</h1>
        </div>
      </main>
    )
  }
}

export default Recommend
