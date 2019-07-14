import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './components/MapContainer';
import './App.scss';
import Aux from './components/Aux';


class App extends Component {
  state = {
    data: null,
    error: false
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    axios.get('http://api.open-notify.org/iss-now.json')
      .then(
        response => {
          this.setState({ data: response.data });
        },
        error => {
          this.setState({ error: true });
        });
    if (!this.state.error) {
      setTimeout(this.apiCall, 500);
    }
  }

  render() {
    let lng, lat;
    if (this.state.data) {
      lng = this.state.data.iss_position.longitude
      lat = this.state.data.iss_position.latitude
    }

    let map, coordinates, liveTracking;
    if (!this.state.error) {
      map = <MapContainer className='map' lat={lat} lng={lng} />;
      coordinates = <div className='coordinates'>
        <p>lat: {lat}</p>
        <p>lng: {lng}</p>
      </div>
      liveTracking = <span className='live-tracking'>live tracking</span>
    } else {
      coordinates = <div className='coordinates'>
        <p>no signal</p>
      </div>
      liveTracking = <span className='live-tracking'>no signal</span>
    }



    return (
      <Aux>
        {map}
        <div className='overlay'>
          <h1>
            <span className='long'>International Space Station </span>
            <span className='short'>ISS </span>
            {liveTracking}
          </h1>
          <div className='crosshair'>
            <div></div>
            <div></div>
          </div>
          {coordinates}
        </div>
      </Aux>
    )
  };
}

export default App;
