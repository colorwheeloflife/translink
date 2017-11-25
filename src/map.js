import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Mapbox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiY29sb3J3aGVlbCIsImEiOiJjaXZ1MWl0ZjkwMDl6MnRycW5meWF6b3ViIn0.cipbD6ZfnaP4uB766iqKDg'
});

export default class Map extends Component {
  render() {
    return (
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        center={ [-123.1173, 49.2467] }
        zoom={ [12] }>
      </Mapbox>
    )  
  }
}
