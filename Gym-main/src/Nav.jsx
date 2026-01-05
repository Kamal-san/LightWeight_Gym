import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navi() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navi">
            <nav>
                <div className="menu-header">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <span className="gym-name">LightWeight</span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li id='logo'><a href="https://www.linkedin.com/in/kamaleshwaran-e-57433721a?trk=contact-info" target='new'>KW</a></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/locator">Gym Locator</Link></li>
                    <li><Link to="/franchise">Franchise</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navi;
