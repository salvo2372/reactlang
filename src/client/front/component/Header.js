import React, { Component } from 'react';
import {Square} from '../services/Square';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{Square(3,4,5,6,7)}</h1>
            <p>contenuto</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
