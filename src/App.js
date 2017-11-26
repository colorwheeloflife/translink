import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import './App.css';
import Map from './map';
import { getBusData } from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.actions.getBusData();
  }
  
  constructor(props) {
    super(props);
    this.state = {
      buses: [0]
    }
  }
  
  componentWillReceiveProps(props) {
    if (props.buses[0] != this.state.buses[0]) {
      this.setState({ buses: props.buses[0] });
    }
  }
  
  onButtonClick = () => {
    console.log('buses: ', this.props.buses[0]);
  }

  render() {
    return (
      <div>
        <Map />
        <button id='data_btn' onClick={this.onButtonClick}>click me for data</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buses: state.buses
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getBusData }, dispatch)
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
