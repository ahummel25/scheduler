import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="header-title">Scheduler</h1>
        </header>
      </div>
    );
  }
}

export default Header;