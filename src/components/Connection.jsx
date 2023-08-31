import React, { Component } from 'react';
import ROSLIB from 'roslib';import { Alert} from 'react-bootstrap';
import Config from '../script/config';
class Connection extends Component {
    state = {
        connected: false,
        ros: null
      }
    constructor(){
        super();
        this.init_connection();
    }
    init_connection(){
        this.state.ros = new ROSLIB.Ros({
            url: 'ws://localhost:9090'
        });
        this.state.ros.on('connection', () => {
            console.log('Connected to websocket server.');
            this.setState({connected: true});
        });
        this.state.ros.on('error', (error) => {
            console.log('Error connecting to websocket server: ', error);
            this.setState({connected: false});
        });
        this.state.ros.on('close', () => {
            console.log('Connection to websocket server closed.');
            this.setState({connected: false});
            // try to reconnect every 2 seconds 
            setTimeout(() => {
                try{
                    // this.state.ros.connect("ws://192.168.0.2:9090");
                    this.state.ros.connect(
                        "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + ""
                    )
                }
                catch(e){
                    console.log(e);
                }
            }, Config.RECONNECT_TIMER);
            
        });
        try{
            this.state.ros.connect(
                "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + ""
            );
        }
        catch(e){
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