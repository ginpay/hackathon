import React, { Component } from 'react'
import Traveler from "../components/Traveler";
import axios from "axios";
import api from "../../../config/api";

class Travelers extends Component {

  state = {
    requests: []
  }

  componentDidMount() {
    axios.get(`${api.API_ORIGIN}requests`)
      .then(res => {
        const requests = res.data
        this.setState({ requests });
      })
  }

  render() {

    return (
      <div className="travelers">
        {this.state.requests.map((data) => {
          return <Traveler key={data.id} traveler={data}></Traveler>;
        })}
      </div>
    );
  }
}
export default Travelers