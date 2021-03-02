import { Container, Row, Col, Card, Button } from "react-bootstrap"
import "./PortfolioCard.css"

function PortfolioCard(props) {
    return (  
        <div class="portfolio">
                    <Card>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title><h4>{props.name}</h4></Card.Title>
                        <Card.Text>
                        <p>{props.description}</p>
                        <p>{props.tech}</p>
                        </Card.Text>
                        <a href={props.href}><Button variant="primary">View App</Button></a>
                    </Card.Body>
                </Card>
        </div>
            )
}

export default PortfolioCard;