import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
  render() {
    return (
      <nav className='nav__links'>
        <Link to='/' className='nav__link'>
          Dashboard
        </Link>
        <Link to='/scoreboard' className='nav__link'>
          Stats
        </Link>
      </nav>
    );
  }
}

export default Nav;
