import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import "./Style.css";


function Home() {
    return (
        <div>
            <Navbar />
            <Container style = {{ paddingBottom: 100}}>
                <Row >
                <h1 >Timothy's Page</h1>
                </Row>
            
            
            <div class="row">
                <div class="col-lg">
                    <Image src="../img/placeholder.jpg" rounded />
                </div>

                <div class="col-lg">
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