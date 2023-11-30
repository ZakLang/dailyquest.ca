import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';

function SiteBodyAboutPage() {

  // TODO: Replace this with a call to the backend
  const aboutHeading = "About Me"
  const aboutBody = `I'm just a dude, grinding out daily quests, trying to level up and become a better version of myself every day.

I'm not focused on some lofty end goals, and I'm not focused on what others are doing or what they think of me. I care only about challenging myself to incrementally get stronger, healthier, more focused and more loving.

I'm sharing my personal experiences and lessons I've learned. While I try to do my research, I may not always be right. You are free to take what you like from my experiences and leave behind anything that doesn't resonate with you.

My hope is that through sharing my stories I can help others who want to incrementally level up too but are feeling a little lost.`

  return (
    <div data-testid="about-page">
      <Container fluid>
        <Row>
          <Col>
            <h4 className="text-center text-lg-start">{aboutHeading}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure className="float-end" style={{maxWidth:"500px", padding:"30px"}}>
              <Figure.Image width="100%"
                            alt="About Me"
                            src="images/about.jpg"/>
              <Figure.Caption>Placeholder image</Figure.Caption>
            </Figure>
            <div className="text-start text-pre-wrap">{aboutBody}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SiteBodyAboutPage;