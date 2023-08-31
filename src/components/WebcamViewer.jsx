import React, { Component } from 'react';
import ROSLIB from 'roslib';

class WebcamViewer extends Component {
  state = {
    imageData: '',
  };

  constructor(props) {
    super(props);

    // Initialize ROS connection
    this.ros = new ROSLIB.Ros({
      url: this.props.rosBridgeUrl,
    });

    // Subscribe to the USB_CAM topic
    this.imageTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/usb_cam/image_raw', // Replace with your webcam topic name
      messageType: 'sensor_msgs/Image',
    });

    // Set up a callback for when a new image is received
    this.imageTopic.subscribe(this.imageCallback.bind(this));
  }

  imageCallback(message) {
    // Handle incoming image data here
    const imageData = 'data:image/jpeg;base64,' + message.data;

    // Check if the component is mounted before updating the state
    if (this.mounted) {
      this.setState({ imageData });
    }
  }

  componentDidMount() {
    // Set a flag indicating that the component is mounted
    this.mounted = true;

    // Add an error event listener to the ROS connection
    this.ros.on('error', (error) => {
      console.error('ROS Connection Error:', error);
      // You can add error handling here if needed
    });
  }

  componentWillUnmount() {
    // Clean up when the component is unmounted
    this.imageTopic.unsubscribe();

    // Check if the ROS connection is still open before closing it
    if (this.ros.isConnected) {
      this.ros.close();
    }

    // Reset the mounted flag to avoid state updates after unmounting
    this.mounted = false;
  }

  render() {
    return (
      <div>
        {this.state.imageData && (
          <img src={this.state.imageData} alt="Webcam Feed" />
        )}
      </div>
    );
  }
}

export default WebcamViewer;
