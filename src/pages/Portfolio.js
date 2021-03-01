import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Container, Card, Button } from 'react-bootstrap'

import "./Style.css";

function Home() {
  return (
    <div>
      <Navbar />
      
      <Container style = {{ paddingBottom: 100}}>
      <h1>Timothy's Portfolio Page</h1>
      <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body>
            <Card.Title>Herbizzle</Card.Title>
            <Card.Text>
              Just your basic "Herb" Strain HQ 
            <br></br>
            You can look up effects (good & bad) of different "Herbs". 
            <br></br>
            See the different Medicinal uses and 
            <br></br>
            keep track of the personal effects using a notes section. 
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <hr></hr>

        <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              A simple online Journal
              <br></br>
              Create, edit, and delete personal notes and/or tasks.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <hr></hr>

        <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body>
            <Card.Title>On Your Markdown</Card.Title>
            <Card.Text>
              Looking to make a quick README file for your project or App?
            <br></br>
            This will allow you to answer a few questions and get that README file done.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <hr></hr>

        <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body >
            <Card.Title>Nightmare Before Christmas Quiz</Card.Title>
            <Card.Text>
              Take a quick Nightmare Before Christmas Quiz.
              <br></br>
              Keep Score and compete against your friends.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body >
        </Card>

        <hr></hr>

        <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              A Simple Budget Tracker
              <br></br>
              Allows you to keep track of your budget whether you are online or offline.
          </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <hr></hr>

        <Card className="text-center">
          <Card.Img variant="top" src="https://via.placeholder.com/1000" />
          <Card.Body>
            <Card.Title>WorkoutWzrd</Card.Title>
            <Card.Text>
              A Simple Workout Tracker
              <br></br>
              Keep track of your Cardio and Strength Training.
          </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>


  );
}

export default Home;