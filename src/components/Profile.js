import React from 'react';
import Contact from './Contact';
import About from './About';

const Profile = () => {
    return(
        <>
            <div id="profile-wrap">
                <aside id="sticky-profile">
                    <div id="profile">
                        <img src="/assets/img/me.png" alt="Me" />
                        <div>
                            <a href>
                                <span className="material-symbols-outlined">id_card</span>
                                <p> Lisan Shidqi Farizan</p>
                            </a>
                            <a href>
                                <span className="material-symbols-outlined">badge</span>
                                <p> Junior Front-End</p>
                            </a>
                            <a href>
                                <span className="material-symbols-outlined">male</span>
                                <p>Male</p>
                            </a>
                            <a href>
                                <span className="material-symbols-outlined">cake</span>
                                <p>April 2003</p>
                            </a>
                            <a href download="Curriculum Vitae | Lisan Shidqi Farizan">
                                <span className="material-symbols-outlined">download</span>
                                <p target="_blank" href="https://github.com/veoveneht">My CV</p>
                            </a>
                        </div><br />
                    </div>
                    <Contact />
                    <About />
                </aside>
            </div>
        </>
)};

export default Profile;