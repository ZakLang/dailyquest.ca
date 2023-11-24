import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';

function SiteHeader(props){
  return(
    <header>
      <Logo />
      {/* <Container>
        
      </Container>

      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item> */}
    </header>
  )
}

export default SiteHeader;