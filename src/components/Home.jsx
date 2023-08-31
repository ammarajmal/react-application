import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import Connection from './Connection';
class Home extends Component {
    state = {
        // counter : 0
      }
    increment_counter(){
        this.setState({counter: this.state.counter + 1})
        console.log(this.state.counter)
    } 
    render() { 
        return (
            <div>
                <main>
                <h1 className='text-center'>Camera Dashboard</h1>
                <p> This is the home page for cameras dispaly! </p>
                {/* <h5>Counter: <span>{this.state.counter}</span></h5> */}
                {/* <Button variant='primary' onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</Button> */}
                {/* <Button variant='primary' onClick={() => this.increment_counter()}>Increment</Button> */}
                <Connection />
                </main>
            </div>

        );
    }
}
 
export default Home;