import React, { Component } from 'react';
import Result from './component/Result';
import Thumb from './component/Thumb';
//import mysql from 'mysql';
class Home extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="container">
        <div className="row">
           <div className="col-md-12">

           </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Thumb />
          </div>
          <div className="col-md-6">
            <Thumb />
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
