import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            active: false
        }
    }
    
    renderItems = function() {
        if(this.state.active) {
            return [
                <Clock/>,
                
            ]
        } else {
            return Button('Generate Countdown', () => this.setState({ active: true }))  
        }
    }.bind(this)
    
  render() {
      
      // return <div className=""><Clock/></div>
      
    return (
      <div className='grid'>
        <div className="grid_title">Birthday Countdown</div>
        
        <div className='grid_skew-dark-one-box'></div>
        <div className='grid_skew-dark-two'></div>
        <div className='grid_skew-dark-three'></div>
        
        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-light-two"></div>
        <div className="grid_skew-light-three-box"></div>
        
        <Picker/>
        { this.renderItems() }
      </div>
    );
  }
}
