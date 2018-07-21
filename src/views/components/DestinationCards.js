import React, { Component } from 'react'
import DestinationCard from "../components/DestinationCard";
import SimpleButton from "../components/SimpleButton";

class DestinationCards extends Component {
  render() {

    return (
      <div className="destination-cards">
        <div className="row">
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
        </div>
        <div className="row">
          <div className="col s4 offset-s4 m4 offset-m4 l4 offset-l4 center-align">
            <SimpleButton label="See more"></SimpleButton>
          </div>
        </div>
      </div>
    );
  }
}
export default DestinationCards