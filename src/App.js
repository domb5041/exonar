import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import PhotoGrid from './components/PhotoGrid'
import axios from 'axios';


class App extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    const access = '09aa8e1ca0bc53258faabd91d192b1aeae5fd4230ef2f43cd354b802c29810dd';
    const secret = '4e5b76aa4375f4281195d21f685d3e1b501f37c73e126b00144eb2c6f88adde0';
    axios.get(`https://api.unsplash.com/photos/?client_id=${access}`)
      .then(response => {
        const posts = response.data.slice(0, 50);
        this.setState({ photos: response.data });
        console.log(response);
      })
  }

  render() {

    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>

        <PhotoGrid photos={this.state.photos} />
      </div>
    )
  };
}

export default App;
