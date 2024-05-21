import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()  => {
    return (
        <footer>
            <div>
                <div className="foot_links">
                    <Link class="list_nav" to="/">HOME</Link>
                    <Link class="list_nav" to="/Blog">BLOG</Link>
                    <Link class="list_nav" to="/Store">STORE</Link>
                    <Link class="list_nav" to="/Disclaimer">DISCLAIMER</Link>
                    <Link class="list_nav" to="/Contact">CONTACT</Link>
                    <Link class="list_nav" to="/Sitemap">SITEMAP</Link>
                    <Link class="list_nav" to="/Privacy_Policy">PRIVACY POLICY</Link>
                </div>
                <p><a href>COPYRIGHT &copy; 2023 VEOveneht</a></p>
            </div>
        </footer>
    )
}

export default Footer;