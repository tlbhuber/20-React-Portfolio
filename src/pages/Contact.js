import 'bootstrap/dist/css/bootstrap.min.css';
// import { Image } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import "./Style.css";


function Home() {
    return (
        <div>
            <Navbar />
            <h1>Contact Me</h1>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    );
}

export default Home;