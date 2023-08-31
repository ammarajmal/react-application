import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Connection from './Connection';
import Cameradisplay from './Cameradisplay';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1
            style={{
              position: 'relative',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            <span
              style={{
                position: 'relative',
              }}
            >
              Camera Dashboard
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '0',
                  right: '0',
                  height: '2px',
                  backgroundColor: '#FFF',
                }}
              ></span>
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                  right: '0',
                  height: '2px',
                  backgroundColor: '#FFF',
                }}
              ></span>
            </span>
          </h1>
          <Row>
            <Col></Col>
            <Col>
              <h5 style={{ margin: '15px 0' }}>Remote ROS Server status:</h5>
            </Col>
            <Col>
              <Connection />
            </Col>
            <Col></Col>
          </Row>
          <Cameradisplay />
        </Container>
      </div>
    );
  }
}

export default Home;
