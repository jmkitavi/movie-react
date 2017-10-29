import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" activeClassName="navbar-brand">Stupid Movie App</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/upcoming" activeClassName="active">Upcoming</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;