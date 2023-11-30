import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from './Logo';

function SiteHeader(props){
  
  const brandStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }

  return(
    <header data-testid="site-header">
      <Navbar expand="lg" className="bg-body-tertiary navbar-expand-md">
        <Container className="content-width">
          <Navbar.Brand onClick={() => props.onNavSelect('home')} style={brandStyle} data-testid="home-link">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav as="ul" onSelect={(page) => {props.onNavSelect(page)}}>
              <Nav.Item as="li" >
                <Nav.Link eventKey="about" data-testid="about-link">About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" >
                <Nav.Link eventKey="blogs" data-testid="blogs-link">Blogs</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default SiteHeader;