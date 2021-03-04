import { Container } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Self from "../components/Self"
import About from "../components/About"
import Skills from "../components/Skills"

// import "./Style.css";


function Home() {
    return (
        <div style={{
            paddingBottom: 50
        }}>
            <Navbar />
            <Self />
            <Container>
                <hr></hr>
                <About />
            </Container>
            <Container >
                <Skills/>
            </Container>

        </div>
    );
}

export default Home;