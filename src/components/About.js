import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap"

function About() {
    return (

        <CardDeck>
        <Card style = {{
            background: "#6BE269"
        }}>
          <Card.Body >
            <Card.Title>Who I was:</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style = {{
            background: "#6BE269"
        }}>
          <Card.Body>
            <Card.Title>Who I am:</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style = {{
            background: "#6BE269"
        }}>
          <Card.Body>
            <Card.Title>Who I will be:</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>


    )
}

export default About;