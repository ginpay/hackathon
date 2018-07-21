import React, { Component } from 'react'
import destination1 from '../../img/destination1.jpg'
import {Icon, Card} from 'react-materialize'

class DestinationCard extends Component {
  render() {

    return (
      <div className="destination-card col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img src={destination1}></img>
            <span className="card-title">name</span>
            <a className="btn-floating halfway-fab waves-effect waves-light"><Icon>search</Icon></a>
          </div>
          <div className="card-content">
            <p>short description</p>
          </div>
          <div className="card-action">
            <div className="ginpay">0.8</div><Icon>money</Icon>
          </div>
        </div>
      </div>
    );
  }
}
export default DestinationCard