import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Pin from './pin';

const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_API_TOKEN;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 49.2467,
        longitude: -123.1173,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        width: 1200,
        height: 800,
      }
    };
  }
  
  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _renderBusMarker = (bus, index) => {
    if (bus != [0]) {
      return (
        <Marker key={`marker-${index}`}
          longitude={bus.Longitude}
          latitude={bus.Latitude} >
          <Pin size={8} />
        </Marker>
      );
    }
  }
    
  render() {
    const { viewport } = this.state;
    const { buses } = this.props;
    
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={ MAPBOX_KEY } >
        
        { buses.map(this._renderBusMarker) }
      </MapGL>
    );
  }
}
