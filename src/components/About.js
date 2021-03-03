import { Row, Card, CardDeck, Container, Button } from "react-bootstrap"


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

        
        {/* <CardGroup>
          <Card style={{
            background: "#3CABA8",
            textlign: "center"
          }}>
            <Card.Body >
              <Card.Title>Front End</Card.Title>
              <Card.Text className = "cardbody">
                <ul>
                  <li></li>
                </ul>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            background: "#3CABA8"
          }}>
            <Card.Body>
              <Card.Title>Back End</Card.Title>
              <Card.Text>
                <ul>
                  <li></li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

        </CardGroup> */}
            <Container style ={{
              paddingLeft: "30%",
              paddingRight: "30%"
            }}>
              <Card>
                <Card.Header style= {{
                    backgroundColor: "darkgrey",
                    color: "black",
                    textAlign: "center"
                  }}>
                    <h2>Current Skills</h2>
                    </Card.Header>
                  <Card.Body style= {{
                    backgroundColor: "#7A7DEC",
                    color: "white"
                  }}>
                     <Card.Title>Front End</Card.Title>
                 <Card.Text>
                      <ul style ={{
                        listStyleType: "none",
                        textAlign: "left"
                      }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>React</li>
                      </ul>
                 </Card.Text>
                 
                  </Card.Body>
                  <Card.Body style= {{
                    backgroundColor: "#8A8CE3",
                    color: "white"
                  }}>
                     <Card.Title>Back End</Card.Title>
                 <Card.Text>
                 <ul style ={{
                        listStyleType: "none",
                        textAlign: "left"
                      }}>
                        <li>MySql</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Bash</li>
                      </ul>
                 </Card.Text>
                 
                  </Card.Body>
            </Card>
            </Container>
      </Row>
    </>

  )
}

export default About;