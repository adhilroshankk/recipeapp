import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';



function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home" className='m-0'>
              <img
                alt=""
                src="cbook.jpg"
                width="130"
                height="130"
                className="d-flex text-center m-0 mb-0"
              />{' '}
              <span></span>
            </Navbar.Brand>
           
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header