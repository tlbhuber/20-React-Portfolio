import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Home() {
    return (
        <div>
            <Navbar />

            Timothy's Page


      
         <div className="fixed-bottom">  
         <Footer><span><p>Footer</p></span></Footer>
        </div>
        </div>
    );
}

export default Home;