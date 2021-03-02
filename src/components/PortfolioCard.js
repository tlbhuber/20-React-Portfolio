import { Container, Row, Col, Card, Button } from "react-bootstrap"
import "./PortfolioCard.css"

function PortfolioCard(props) {
    return (  
        <div class="portfolio">
                    <Card>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body style={{ 
                                backgroundColor: "black",
                                color: "white",
                                fontSize: 20 }} >
                        <Card.Title><h1 style ={{
                            color: "white"
                        }}>{props.name}</h1></Card.Title>
                        <Card.Text>
                        <p><span style = {{
                            fontWeight:"bold", 
                            fontStyle: "italic", 
                            color: "#D3C9D0",
                            textTransform: "uppercase"
                        }}>Description: </span> <br></br>{props.description}</p>
                        <p><span style = {{
                            fontWeight:"bold", 
                            fontStyle: "italic", 
                            color: "#D3C9D0",
                            textTransform: "uppercase"
                        }}>Technologies Used: </span> <br></br>{props.tech}</p>
                        </Card.Text>
                        <a href={props.link}><Button variant="primary">View App</Button></a>
                    </Card.Body>
                </Card>
        </div>
            )
}

export default PortfolioCard;