import React from 'react';
import { Link } from 'react-router-dom';

// ! CSS
import '../assets/css/footer.css';


const Footer = ()  => {
    return (
        <footer>
            <div>
                <div className="foot_links">
                    <Link class="list_foot" to="/">HOME</Link>
                    <Link class="list_foot" to="/blog">BLOG</Link>
                    <Link class="list_foot" to="/store">STORE</Link>
                    <Link class="list_foot" to="/disclaimer">DISCLAIMER</Link>
                    <Link class="list_foot" to="/contact">CONTACT</Link>
                    <Link class="list_foot" to="/privacy-policy">PRIVACY POLICY</Link>
                </div>
                <p><a href>Made By Lisan Shidqi Farizan | &copy;2023 VEOveneht |</a></p>
            </div>
        </footer>
    )
}

export default Footer;