import React from 'react';
import WebcamViewer from './WebcamViewer';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CameraDisplay = () => {
    const rosBridgeUrl = 'ws://192.168.0.9:9090'; // Replace with your ROS Bridge URL

    return (
      <div className="App">
        <h1>ROS Webcam Viewer</h1>
        <WebcamViewer rosBridgeUrl={rosBridgeUrl} />
      </div>
    );
    //   return (
//     <div>
//       <Container>
//         <Row>
//           <Col>
//             <h4 style={{ margin: '20px 0' }}>Camera Start:</h4>
//           </Col>
//           <Col><Button variant="primary" size="lg" block="true">Camera 1</Button></Col>
//           <Col><Button variant="primary" size="lg" block="true">Camera 2</Button></Col>
//           <Col><Button variant="primary" size="lg" block="true">Camera 3</Button></Col>
//         </Row>
//         <Row>
//           <Col>Cameras 1 Display</Col>
//           <Col>Camera 1</Col>
//           <Col>Camera 2</Col>
//           <Col>Camera 3</Col>
//         </Row>
//       </Container>
//     </div>
//   );
};

export default CameraDisplay;
