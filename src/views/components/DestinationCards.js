import React, { Component } from 'react'
import DestinationCard from "../components/DestinationCard";
import SimpleButton from "../components/SimpleButton";
import axios from "axios";
import api from "../../../config/api";

class DestinationCards extends Component {

  state = {
    destinations: []
  }

  componentDidMount() {
    // axios.get(`${api.API_ORIGIN}destination`)
    //   .then(res => {
    //     const destinations = res.data;
    //     this.setState({ destinations });
    //   })
    const testData = [
      {
        'destination_id': 1,
        'name': '北海道',
        'image': 'https://search.find47.jp/ja/i/YmGB0/image_file?type=detail_thumb',
        'point': '0.12',
        'description': '毎年、8月初旬に三浦市は三浦海岸納涼まつり花火大会を開催する。'
      },
      {
        'destination_id': 2,
        'name': '青森',
        'image': 'https://search.find47.jp/ja/i/2rsay/image_file?type=detail_thumb',
        'point': '0.12',
        'description': '夏の太陽が沈んだ後、3000発の花火が打ち上げられると夜空は輝きで彩られる。　夏祭りを満喫するのに欠かせないもの全てがここで楽しめる―太陽、砂浜、夜店の食べ物、綺麗な浴衣、そして花火。'
      }

    ]
    this.setState({destinations: testData})
  }

  render() {

    return (
      <div className="destination-cards">
        <div className="row">
          {this.state.destinations.map((data) => {
            return <DestinationCard destination={data}></DestinationCard>;
          })}
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