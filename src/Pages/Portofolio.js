import React from 'react';
import { Link } from 'react-router-dom';
import mepng from "../assets/img/me.png";
import certHTML from "../assets/img/certificate/sololearn_html.png";
import calc from "../assets/img/calc.png";


import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";

// ! CSS
import '../assets/css/portofolio.css'

const Portofolio = () => {
    return(
    <>
        <Navigation />
            <div className="container">
                <div className="wrap">
                    <br/>
                <h1>MY PORTOFOLIO</h1>
                <br/>
                    <div id="profile_top">
                        <div>
                            <img id="mepng" alt="Lisan Shidqi Farizan" src={mepng} />
                            <h1>Lisan Shidqi Farizan</h1>
                        </div>
                        <div>
                            <br/>
                            <h1>Front-End Developer</h1>
                            <p>Coding is my passion, make a character that are not only functional but also present an
                                appealing aesthetic is my commitment. My dedication to each project is reflected in the
                                effort to create a stunning look.</p>
                        </div>
                    </div>
                        <br/>
                </div>
                <div className="wrap">
                    <div id="my_project">
                        <br/>
                        <h2>Certificate</h2>
                        <div className="porto-card">
                            <div>
                                <img src={certHTML} alt="Certificate HTML from Sololearn" />
                                <a href={certHTML} download="Lisans Certificate">HTML Certificate</a>
                            </div>
                        </div>
                        <br/>
                        <h2>My Project</h2>
                        <div className="porto-card">
                            <div>
                                <img src={calc} alt="Store" />
                                <Link to="/store">Store</Link>
                            </div>
                            <div>
                                <img src={calc} alt="Bot Whatsapp" />
                                <Link to="/VeoBot">Bot WhatsApp</Link>
                            </div>
                        </div>
                        <br/>
                        <h2>Fake Project</h2>
                        <div className="porto-card">
                            <div>
                                <img src={calc} alt="Simple Calculator" />
                                <Link to="/simple-calculator">Simple Calculator</Link>
                            </div>
                            <div>
                                <img src={calc} alt="Simple Calculator with NodeJS" />
                                <a href="./FakeProject/SimpleNodeCalculator.js">Simple Node Calculator</a>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        <Footer />
    </>
    )
}

export default Portofolio;