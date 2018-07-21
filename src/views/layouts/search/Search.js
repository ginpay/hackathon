import React, { Component } from 'react'
import Navbar from "../../components/Navbar";

class Search extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="search">
        <Navbar></Navbar>
        <div className="container">
          <h1>Find a destination</h1>
        </div>
      </main>
    )
  }
}

export default Search
