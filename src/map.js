import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_API_TOKEN;

export default class Map extends Component {
  render() {
    return (
      <ReactMapGL
        width={400}
        height={400}
        latitude={49.2467}
        longitude={-123.1173}
        zoom={12}
        mapboxApiAccessToken={ MAPBOX_KEY }
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    );
  }
}
