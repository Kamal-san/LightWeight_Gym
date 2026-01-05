import { Link } from "react-router-dom";
function Quick()
{
    return(
        <div className="qu">
           
        <div className="quicklink">

            <div className="c1">
            <h2 id="qhead">Quick Links</h2>
                <h3 className="headb">LightWeight</h3>
                <p>LightWeight is one of the best fitness centers in Arcot.
                     Our customized designs will help to enjoy the best experience of your life.</p>
            </div>

            <div className="c2">
                <h2 className="headbb"> Links</h2>
                <ul>
                   <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/locator">Gym Locator</Link></li>
                    <li><Link to="/franchise">Franchise</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="c3">
                <h2 className="headb">Contact</h2>
                <p>9629526697</p>
                <p>lightweight@gmail.com</p>
                

                

            </div>
            <div className="c4">
                <h2 className="headb">Location</h2>
                <p>131,ricemill street,sipcot,ranipet district</p>
            </div>
            
        </div>
        </div>

    );
}
export default Quick
