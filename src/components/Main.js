import React from "react";

const Main = () => {
    return (
        <main>
            <div id="banner"></div>
            <div class="container">
                <div class="wrap">
                    <div id="profile_top">
                        <div>
                            <img id="mepng" alt="Lisan Shidqi Farizan" src="./assets/img/me.png" />
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
                                <img src="./assets/img/certificate/sololearn_html.png"
                                    alt="Certificate HTML from Sololearn" />
                                <p><a href="./assets/img/certificate/sololearn_html.png" download="Lisans Certificate">HTML
                                        Certificate</a></p>
                            </div>
                        </div>
                        <h2>My Project</h2>
                        <div class="card">
                            <div>
                                <img src="./assets/img/calc.png" alt="Simple Calculator" />
                                <p><a href="./project/store.html">RaySan Store</a></p>
                            </div>
                            <div>
                                <img src="./assets/img/calc.png" alt="Simple Calculator" />
                                <p><a href="./project/bot.html">Bot WhatsApp</a></p>
                            </div>
                        </div>
                        <h2>Fake Project</h2>
                        <div class="card">
                            <div>
                                <img src="./assets/img/calc.png" alt="Simple Calculator" />
                                <p><a href="./FakeProject/Simple Kalkulator.html">Simple Calculator</a></p>
                            </div>
                            <div>
                                <img src="./assets/img/calc.png" alt="Simple Calculator" />
                                <p><a href="./FakeProject/SimpleNodeCalculator.js">Simple Node Calculator</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;