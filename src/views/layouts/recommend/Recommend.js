import React, { Component } from 'react'
import Navbar from "../../components/Navbar";

const Web3 = require('web3');
var accessToken = ""; //infuraのアクセストークン設定
const provider = new Web3.providers.HttpProvider(
   "https://rinkeby.infura.io/" + accessToken
  )
const web3 = new Web3(provider);

import Travelers from "../../components/Travelers";

class Recommend extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {

    // const balance = () => {
    //   console.log(this.props.authData.address)
    //   return web3.eth.getBalance(this.props.authData.address) / 1e+18
    // }

    return(
      <main className="matching">
        <Navbar></Navbar>
        <div className="container">
          <h2>Wish list of travelers</h2>
          {/*<h2>{balance()} ETH</h2>*/}
          <Travelers></Travelers>
        </div>
      </main>
    )
  }
}

export default Recommend
