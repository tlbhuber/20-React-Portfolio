import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Self from "../img/placeholder.jpg"

import "./Style.css";


function Home() {
    return (
        <div>
            <Navbar />
            <Container style = {{ paddingBottom: 100}}>
                <Row >
                <h1 >Timothy's Page</h1>
                </Row>
            
            
            <div className="row">
                <div className="col-lg">
                    <Image src= {Self}/>
                </div>

                <div className="col-lg">
                    This is where the about me goes
                </div>

            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
            </Container>
            
        </div>
    );
}

export default Home;