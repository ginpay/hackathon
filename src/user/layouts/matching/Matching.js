import React, { Component } from 'react'
import Navbar from "../../ui/Navbar";

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
        </div>
      </main>
    )
  }
}

export default Matching
