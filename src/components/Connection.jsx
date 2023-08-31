import React, { Component } from 'react';
import ROSLIB from 'roslib';
import { Alert } from 'react-bootstrap';
import Config from '../script/config';

class Connection extends Component {
  constructor() {
    super();
    this.state = {
      connected: false,
      ros: null
    };
  }

  componentDidMount() {
    this.init_connection();
  }

  init_connection() {
    const { ROSBRIDGE_SERVER_IP, ROSBRIDGE_SERVER_PORT, RECONNECT_TIMER } = Config;
    const ros = new ROSLIB.Ros({
      url: `ws://${ROSBRIDGE_SERVER_IP}:${ROSBRIDGE_SERVER_PORT}`
    });

    ros.on('connection', () => {
      console.log('Connected to websocket server.');
      this.setState({ connected: true });
    });

    ros.on('error', (error) => {
      console.log('Error connecting to websocket server: ', error);
      this.setState({ connected: false });
    });

    ros.on('close', () => {
      console.log('Connection to websocket server closed.');
      this.setState({ connected: false });
      // try to reconnect every 2 seconds
      setTimeout(() => {
        try {
          ros.connect(`ws://${ROSBRIDGE_SERVER_IP}:${ROSBRIDGE_SERVER_PORT}`);
        } catch (e) {
          console.log(e);
        }
      }, RECONNECT_TIMER);
    });

    try {
      ros.connect(`ws://${ROSBRIDGE_SERVER_IP}:${ROSBRIDGE_SERVER_PORT}`);
      this.setState({ ros });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Alert variant={this.state.connected ? 'success' : 'danger'}>
          {this.state.connected ? 'Connected' : 'Disconnected'}
        </Alert>
      </div>
    );
  }
}

export default Connection;
