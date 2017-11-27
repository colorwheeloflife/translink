import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import '../style/App.css';
import Map from './map';
import { getBusData } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buses: [0]
    }
  }

  componentDidMount() {
    this.props.actions.getBusData();
  }

  componentWillReceiveProps(props) {
    if (props.buses[0] != this.state.buses[0]) {
      this.setState({ buses: props.buses[0] });
      setInterval(this.props.actions.getBusData(), 500);
    }
  }

  render() {
    return (
      <div>
        <Map buses={ this.state.buses }/>
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
