import React from 'react';
import { Link } from 'react-router-dom';

// ! CSS
import '../assets/css/footer.css';


const Footer = ()  => {
    return (
        <footer>
            <div>
                <ul className="foot_links">
                    <li><Link className="list_foot" to="/">HOME</Link></li>
                    <li><Link className="list_foot" to="/blog">BLOG</Link></li>
                    <li><Link className="list_foot" to="/store">STORE</Link></li>
                    <li><Link className="list_foot" to="/disclaimer">DISCLAIMER</Link></li>
                    <li><Link className="list_foot" to="/contact">CONTACT</Link></li>
                </ul>
                <p>Made By Lisan Shidqi Farizan |&copy;2023 VEOveneht|</p>
            </div>
        </footer>
    )
}

export default Footer;