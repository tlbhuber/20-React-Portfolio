import { Row, Card, CardDeck } from "react-bootstrap"


function About() {
  return (
    <>
      <Row>
        <CardDeck>
          <Card style={{
            background: "#6BE269"
          }}>
            <Card.Body >
              <Card.Title>Who I was:</Card.Title>
              <Card.Text>
                After working in the Financial Services industry for over 10 years, I was looking for something different. I decided to
                completely changed the course of my life!
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            background: "#6BE269"
          }}>
            <Card.Body>
              <Card.Title>Who I am:</Card.Title>
              <Card.Text>
                I have recently graduated from the Rutgers Full Stack Web Development Bootcamop with a basic knowledge of Full Stack Development.
              content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            background: "#6BE269"
          }}>
            <Card.Body>
              <Card.Title>Who I will be:</Card.Title>
              <Card.Text>
                Now that I have the basic training in Ful Stack Development, I am looking to not only pursue a career in this industry,
                but to continuously learn more.
            </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
      <Row style={{
        paddingTop: "25px"
      }}>

        
        
            
      </Row>
    </>

  )
}

export default About;