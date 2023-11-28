import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';

function SiteHeader(props){
  
  const containerStyle = {
    width: "100%",
    flexFlow: "row wrap"
  }

  const handleNavSelect = (eventKey) => {
    props.onNavSelect(eventKey);
  }

  return(
    <header data-testid="site-header">
      <div className="flex-container" style={containerStyle}>
        <div onClick={() => props.onNavSelect('home')} style={{cursor: "pointer"}} data-testid="home-link">
          <Logo />
        </div>
        <Nav defaultActiveKey="home" as="ul" onSelect={handleNavSelect}>
          <Nav.Item as="li" data-testid="about-link">
            <Nav.Link eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" data-testid="blogs-link">
            <Nav.Link eventKey="blogs">Blogs</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  )
}

export default SiteHeader;