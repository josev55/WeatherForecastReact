import React from 'react';
import { Component } from 'react';

// Containers and Components
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
