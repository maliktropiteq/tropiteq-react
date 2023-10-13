import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo-black-mobile.png'
import cross from '../../assets/X.png'
import { useState } from 'react';
function Header() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleCustomButtonClick = () => {
   
    setExpanded(false);
  };
  return (
    <Navbar expand="lg" expanded={expanded} onToggle={handleToggle} className="nav-bg position-fixed w-100 z-3">
      <Container>
        <Navbar.Brand href="/">
          {''}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className='justify-content-center' id="basic-navbar-nav">
          <Nav className="">
            <div className='black-mini-logo'>
            <span onClick={handleCustomButtonClick}>
            <img src={logo} alt="logo" />
            </span>
            <span role='button' onClick={handleCustomButtonClick}>
            <img src={cross} alt="close" />
            </span>
            </div>
            <Nav.Link href="#hero-section">Home
            <div className='nav-item-border'></div>
            </Nav.Link>
            <Nav.Link href="#service-section">Services
            <div className='nav-item-border'></div>
            </Nav.Link>
            <Nav.Link href="#work-section">Case Studies
            <div className='nav-item-border'></div>
            </Nav.Link>
            <Nav.Link href="#whyus-section">About Us
            <div className='nav-item-border'></div>
            </Nav.Link>
            <Nav.Link href="#conatct-section">Contact Us
            <div className='nav-item-border'></div>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;