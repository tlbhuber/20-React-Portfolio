import { Container, Row, Col, Image } from "react-bootstrap"
import Picture from "../img/self.jpeg"
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaRegEnvelope } from "react-icons/fa";




import "./Self.css"

function Self() {
   
    return (
        <Container className="main" fluid>
            <Row >
                <Col classname = "photo" >
                    <Row >
                    <Image src= {Picture} style = {{
                        paddingTop: "5%",
                        height: "30%",
                        width: "30%",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        borderRadius: "50%" 
                    }} fluid/>
                    </Row>
                    <br></br>
                    <Row>
                        <Col style = {{
                            textAlign: "center"
                        }}>

                        <a href="https://www.linkedin.com/in/timothy-balascak-huber-b59b921ba/" target="_blank" rel="noreferrer" className="fa-icons"><SiLinkedin /></a>
                        <a href="https://github.com/tlbhuber" target="_blank" rel="noreferrer" alt="Github" className="fa-icons"><SiGithub /></a>
                        <a href="mailto:tlbalascak.huber@gmail.com" className="fa-icons"><FaRegEnvelope /></a>
                        
                        </Col>
                    </Row>
                </Col>
                <Col style = {{
                    paddingBottom: "11%"
                }}>
                    <h1 className="responsive"style = {{
                        paddingTop: "5%",
                        fontSize: "50px"
                    }}>Hi There!!</h1>
                    <h2 className="responsive"style = {{
                        fontSize: "50px"
                    }}>My name is Timothy</h2>
                    <p style = {{
                        paddingTop: "5%",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        textAlign: "left"
                    }}>I am currently a newly graduated student of full stack development
                         and am looking forward to continuing my journey to learn and grow 
                         within the industry. 
                    </p>
                    

                </Col>
            </Row>
        </Container>
    )
}

export default Self;

