import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src="http://www.pngmart.com/files/1/Sneaker-PNG-Image.png" alt='sneaker store' className='logo navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              sneakers
            </Link>              
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <Button cart>
            <span>
              <i className="fas fa-shopping-cart"></i>
            </span>              
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--darkGreen);
  .nav-link {
    color: var(--light);
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`

export default Navbar;