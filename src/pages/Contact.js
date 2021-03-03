import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/Contact";
// import { Image } from 'react-bootstrap';
import Navbar from "../components/Navbar";

import "./Style.css";


function Home() {
    return (
        <div>
            <Navbar />
            <Contact />

        </div>
    );
}

export default Home;