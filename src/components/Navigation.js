import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const showSide = () => {
        setSidebarVisible(true);
    };
    const hideSide = () => {
        setSidebarVisible(false);
    };

    return (
    <header>
        <nav role="navigation" >
            <p class="logo">LISAN<a id="blink" href>_</a></p>
            <div className='links'>
                <Link class="list_nav" to="/">Home</Link>
                <Link class="list_nav" to="/Blog">Blog</Link>
                <Link class="list_nav" to="/Store">Store</Link>
                <a class="list_nav" href="./assets/img/CV.png" download="Lisan Shidqi Farizan">CV</a>
            </div>
            <div class="sidebar" style={{ width: isSidebarVisible ? '100%' : '0' }}>
                <p>LISAN<a id="blink" href>_</a></p>
                <a id="close" onClick={hideSide} href><img src="./assets/img/svg/close.svg" alt="close" style={{width: 25 }}/></a>
                <div className='side'>
                    <Link class="list_nav" to="/">Home</Link>
                    <Link class="list_nav" to="/Blog">Blog</Link>
                    <Link class="list_nav" to="/Store">Store</Link>
                    <a class="list_nav" href="./assets/img/CV.png" download="Lisan Shidqi Farizan">CV</a>
                </div>
            </div>
            <a id="menu" onClick={showSide} href>
                <img src="./assets/img/svg/menu.svg" alt="menu" style={{width: 25}}/>   
            </a>
        </nav>
    </header>
    )
}

export default Navigation;

