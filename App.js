import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Menu from './src/client/front/component/Menu.js';
import Header from './src/client/front/component/Header.js';
import Content from './src/client/front/component/Content.js';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
setDefaultLanguage('en');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      AppName: "Scolaro",
      isOpen : false
    };
  };
  render () {
    return (
      <div>
        <Menu name={this.state.AppName}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <Content />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <Content />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
