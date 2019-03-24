import React, { Component } from 'react';
import Result from './component/Result';
import Thumb from './component/Thumb';
import en from './lang/connect/en.json';
import it from './lang/connect/it.json';

//import mysql from 'mysql';
class Connect extends Component {
  constructor(props){
    super(props);
  }
  render () {
    const { t } = this.props;
    return (
      <div className="container">
        <div className="row">
           <div className="col-md-12">
                          t('home')
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
export default Connect;
