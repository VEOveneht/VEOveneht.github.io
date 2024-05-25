import React from 'react';
import { Link } from 'react-router-dom';
import mepng from "../assets/img/me.png";
import certHTML from "../assets/img/certificate/sololearn_html.png";
import calc from "../assets/img/calc.png";


import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";

const Portofolio = () => {
    

    return(
    <>
        <Navigation />
            <div className="container">
                <div className="wrap">
                <h1>MY PORTOFOLIO</h1>  
                    <div id="profile_top">
                        <div>
                            <img id="mepng" alt="Lisan Shidqi Farizan" src={mepng} />
                            <h1>Lisan Shidqi Farizan</h1>
                        </div>
                        <div>
                            <h1>Front-End Developer</h1><br/>
                            <p>Coding is my passion, make a character that are not only functional but also present an
                                appealing aesthetic is my commitment. My dedication to each project is reflected in the
                                effort to create a stunning look.</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div id="my_project">
                        <h2>Certificate</h2>
                        <div className="card">
                            <div>
                                <img src={certHTML}
                                    alt="Certificate HTML from Sololearn" />
                                <p><a href={certHTML} download="Lisans Certificate">HTML
                                        Certificate</a></p>
                            </div>
                        </div>
                        <h2>My Project</h2>
                        <div className="card">
                            <div>
                                <img src={calc} alt="Store" />
                                <p><Link to="/store">Store</Link></p>
                            </div>
                            <div>
                                <img src={calc} alt="Bot Whatsapp" />
                                <p><Link to="/VeoBot">Bot WhatsApp</Link></p>
                            </div>
                        </div>
                        <h2>Fake Project</h2>
                        <div className="card">
                            <div>
                                <img src={calc} alt="Simple Calculator" />
                                <p><Link to="/simple-calculator">Simple Calculator</Link></p>
                            </div>
                            <div>
                                <img src={calc} alt="Simple Calculator with NodeJS" />
                                <p><a href="./FakeProject/SimpleNodeCalculator.js">Simple Node Calculator</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </>
    )
}

export default Portofolio;