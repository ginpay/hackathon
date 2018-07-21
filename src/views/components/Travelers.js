import React, { Component } from 'react'
import Traveler from "../components/Traveler";

class Travelers extends Component {
  render() {

    return (
      <div className="travelers">
        <Traveler/>
        <Traveler/>
        <Traveler/>
        <Traveler/>
        <Traveler/>
      </div>
    );
  }
}
export default Travelers