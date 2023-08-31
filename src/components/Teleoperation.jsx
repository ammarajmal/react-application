import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component';
class Teleoperation extends Component {
    state = {  } 
    handleMove(){
        console.log("handleMove")
    }
    handleStop(){
        console.log("handleStop")
    }
    render() { 
        return (
            <div>
                <Joystick size={100} sticky={true} baseColor="gray" stickColor="white" move={this.handleMove} stop={this.handleStop}></Joystick>

            </div>
        );
    }
}
 
export default Teleoperation;