import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import mepng from "../assets/img/me.png";
import certHTML from "../assets/img/certificate/sololearn_html.png";
import calc from "../assets/img/calc.png";

// ! CSS

const Portofolio = () => {
    const [isBanner, setIsBanner] = useState(false);

    const banner = () => {
        const sticky = 0;
        if (window.pageYOffset > sticky) {
            setIsBanner(true);
        } else {
            setIsBanner(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', banner);
        return () => {
            window.removeEventListener('scroll', banner);
        };
    }, []);

    return(
        <>
        <Navigation />
        <main>
        <div className={isBanner ? 'banner': ''}></div>
            <div class="container">
                <div class="wrap">
                    <div id="profile_top">
                        <div>
                            <img id="mepng" alt="Lisan Shidqi Farizan" src={mepng} />
                            <h1>Lisan Shidqi Farizan</h1>
                        </div>
                        <div>
                            <h2>Front-End Developer</h2>
                            <p>Coding is my passion, make a character that are not only functional but also present an
                                appealing aesthetic is my commitment. My dedication to each project is reflected in the
                                effort to create a stunning look.</p>
                        </div>
                    </div>
                </div>
                <div class="wrap">
                    <div id="my_project">
                        <h2>Certificate</h2>
                        <div class="card">
                            <div>
                                <img src={certHTML}
                                    alt="Certificate HTML from Sololearn" />
                                <p><a href={certHTML} download="Lisans Certificate">HTML
                                        Certificate</a></p>
                            </div>
                        </div>
                        <h2>My Project</h2>
                        <div class="card">
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
                        <div class="card">
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
        </main>
        <Footer />
        </>
    )
}

export default Portofolio;