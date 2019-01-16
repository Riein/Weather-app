import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import WeatherContent from './containers/WeatherContent/WeatherContent';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WeatherContent />
        </Layout>
      </div>
    );
  }
}

export default App;
