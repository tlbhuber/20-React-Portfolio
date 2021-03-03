import { Container, Form, Button } from "react-bootstrap"
import { FaRegEnvelope } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi"

import "./Contact.css"




function Contact() {
    return (

        <Container>

            <div class="card card-body bg-light contact">
                <h2>Contact Me</h2>
                <br></br>
                <Form class="contact-form">
                    <Form.Group controlId="formBasicName">
                        <Form.Label><IoPersonCircle/> Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First and Last Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><FaRegEnvelope/> Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><BiMessageDetail/> Message</Form.Label>
                        <Form.Control as="textarea" placeholder="This feature is currently disabled.  
                        If you would like to reach out to me, please click on the email link on the home page.  
                        I look forward to hearing from you.  Thank you. " rows={3} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                        </Button>
                </Form>
            </div>
        </Container>

    )
}

export default Contact;