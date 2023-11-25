import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';

function SiteHeader(props){
  
  const containerStyle = {
    width: "100%",
    flexFlow: "row wrap"
  }
  const linkStyle = {
    color: "inherit" // this is to override the default <a> color
  }

  return(
    <header>
      <div className="flex-container" style={containerStyle}>
        <a href="/" style={linkStyle}>
          <Logo />
        </a>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">About</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Blogs" id="nav-dropdown">
            <NavDropdown.Item>Relationships</NavDropdown.Item>
            <NavDropdown.Item>Habits</NavDropdown.Item>
            <NavDropdown.Item>Discipline</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item as="li">
            <Nav.Link href="/">Research</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  )
}

export default SiteHeader;