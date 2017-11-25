import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {
  render() {
    return (
      <ReactMapGL
        width={400}
        height={400}
        latitude={49.2467}
        longitude={-123.1173}
        zoom={12}
        mapboxApiAccessToken={ 'pk.eyJ1IjoiY29sb3J3aGVlbCIsImEiOiJjaXZ1MWl0ZjkwMDl6MnRycW5meWF6b3ViIn0.cipbD6ZfnaP4uB766iqKDg' } 
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    );
  }
}
