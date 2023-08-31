// ros-config.js
const rosnodejs = require('rosnodejs');

// Configure ROS master URI 
rosnodejs.initNode('/my_node', {rosMasterUri: 'http://192.168.0.9:11311'})