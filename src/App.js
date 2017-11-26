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

  render() {
    return (
      <Map />
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getBusData }, dispatch)
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
