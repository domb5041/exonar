import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './components/MapContainer';
import './App.scss';
import Aux from './components/Aux';


class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    axios.get('http://api.open-notify.org/iss-now.json')
      .then(response => {
        this.setState({ data: response.data });
      });
    setTimeout(this.apiCall, 100);
  }

  render() {
    let lng, lat;
    if (this.state.data) {
      lng = this.state.data.iss_position.longitude
      lat = this.state.data.iss_position.latitude
    }



    return (
      <Aux>
        <MapContainer className='map' lat={lat} lng={lng} />
        <div className='overlay'>
          <h1>International Space Station <span>live tracking</span></h1>
          <div className='crosshair'>
            <div></div>
            <div></div>
          </div>
          <div className='coordinates'>
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
          </div>
        </div>
      </Aux>
    )
  };
}

export default App;
