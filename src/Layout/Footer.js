import React from 'react';
import { Link } from 'react-router-dom';

// ! CSS
import '../assets/css/footer.css';


const Footer = ()  => {
    return (
        <footer>
            <div>
                <div className="foot_links">
                    <Link className="list_foot" to="/">HOME</Link>
                    <Link className="list_foot" to="/blog">BLOG</Link>
                    <Link className="list_foot" to="/store">STORE</Link>
                    <Link className="list_foot" to="/disclaimer">DISCLAIMER</Link>
                    <Link className="list_foot" to="/contact">CONTACT</Link>
                </div>
                <p><a href>Made By Lisan Shidqi Farizan | &copy;2023 VEOveneht |</a></p>
            </div>
        </footer>
    )
}

export default Footer;