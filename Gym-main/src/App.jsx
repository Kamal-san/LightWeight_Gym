import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Services.jsx";
import Contact from "./Contact.jsx";
import Franchise from "./Franchise.jsx";
import Loca from "./Locator.jsx";
import Navi from "./Nav.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <Router basename="/LightWeight_Gym">
            <div className="main">
                <Navi />
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/franchise" element={<Franchise />} />
                    <Route path="/locator" element={<Loca />} />
                </Routes>
                <Footer/>
                
            </div>
        </Router>
    );
}

export default App;
