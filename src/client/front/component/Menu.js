import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../Home.js';
import Login from '../Login.js';
import Contact from '../Contact.js';
import Connect from '../Connect.js';
class Menu extends Component {
  constructor(props){
      super(props);
  };
  render () {
    return (
      <Router>
          <div>
          <div id="wrapper">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">{this.props.name}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to={'/home'}>HOME</Link></li>
                    <li><Link to={'/connect'}>CONNECT</Link></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATEGORIE<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li className="minicruise">MINICROCIERE</li>
                      </ul>
                    </li>
                    <li className="shop"><Link to={'/contact'}>SHOP</Link></li>
                    <li className="carrello"><Link to={'/contact'}>CARRELLO</Link></li>
                    <li className="Contact"><Link to={'/contact'}>CONTATTI</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hello,<strong>Username</strong> <i className="fa fa-user fa-fw"></i><span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to={'/login'}>Login</Link></li>
                        <li role="separator" className="divider"></li>
                        <li>Logout</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
            <hr />
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/connect' component={Connect} />
                <Route path='/login' something={"valore"} component={Login} />
                <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </Router>
    )
  }
}
export default Menu;
