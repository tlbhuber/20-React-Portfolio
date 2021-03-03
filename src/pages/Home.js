import { Image, Container, Row } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Self from "../components/Self"
import About from "../components/About"

// import "./Style.css";


function Home() {
    return (
        <div style = {{
            paddingBottom: 50
        }}>
            <Navbar />
            <Self/>
            <Container >
             
              
              
                {/* <Row >
                <h1 >Timothy's Page</h1>
                </Row>
            
            
            <div className="row">
                <div className="col-lg">
                    <Image src= {Self}/>
                </div>

                <div className="col-lg">
                    This is where the about me goes
                </div>

            </div> */}

            </Container>
            <Container>
            <hr></hr>
              <About/>
            </Container>
            
        </div>
    );
}

export default Home;