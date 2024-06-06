import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CV from '../assets/img/CV.png'
import Menu from '../assets/img/svg/menu.svg'
import Close from '../assets/img/svg/close.svg'
import up from '../assets/img/svg/up.svg'

// ! CSS
import '../assets/css/navigation.css';

const Navigation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [upIsVisible, setUpIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isBanner, setIsBanner] = useState(false);

    // ! OnClick
    const showSide = () => {
        setSidebarVisible(true);
    };
    const hideSide = () => {
        setSidebarVisible(false);
    };
    
    // ! End og OnClick
    
    const handleMouseEnter = (e) => {
        const navLinks = document.querySelectorAll('.list_nav');
        navLinks.forEach((link) => {
            if (link !== e.target) {
                link.style.color = '#a5a5a5';
            }
        });
    };
    const handleMouseLeave = () => {
        const navLinks = document.querySelectorAll('.list_nav');
        navLinks.forEach((link) => {
            link.style.color = 'black';
        });
    };

    const scroll = () => {
        const sticky = 0;
        if (window.pageYOffset > sticky) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    const banner = () => {
        const sticky = 1000;
        if (window.pageYOffset > sticky) {
            setIsBanner(true);
            setUpIsVisible(true);
        } else {
            setIsBanner(false);
            setUpIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scroll);
        window.addEventListener('scroll', banner);
        return () => {
            window.removeEventListener('scroll', banner);
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    return (
    <header>
        <p id='upper'></p>
        <a className='scrollup' style={{opacity: upIsVisible ? '100%' : '0%'}} href='#upper'><img src={up} alt='up'/></a>
        <nav role="navigation" className={isSticky ? 'sticky' : ''}>
            <Link to='/' className="logo">LISAN<a id="blink" href>_</a></Link>
            <div className='links'>
                <Link className="list_nav" to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
                <Link className="list_nav" to="/blog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blog</Link>
                <Link className="list_nav" to="/store" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Store</Link>
                <Link className="list_nav" to="/portofolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portofolio</Link>
                <a className="list_nav" href={CV} download="Lisan Shidqi Farizan" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>CV</a>
            </div>
            <div className="sidebar" style={{ width: isSidebarVisible ? '100%' : '0' }}>
                <p>LISAN<a id="blink" href>_</a></p>
                <a id="close" onClick={hideSide} href><img src={Close} alt="close" style={{width: 25 }}/></a>
                <div className='side'>
                    <Link className="list_nav" to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
                    <Link className="list_nav" to="/blog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blog</Link>
                    <Link className="list_nav" to="/store" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Store</Link>
                    <Link className="list_nav" to="/portofolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portofolio</Link>
                    <a className="list_nav" href={CV} download="Lisan Shidqi Farizan" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>CV</a>
                </div>
            </div>
            <a id="menu" onClick={showSide} href>
                <img src={Menu} alt="menu" style={{width: 25}}/>
            </a>
        </nav>
        <div className={isBanner ? 'banner': ''}></div>
    </header>
    )
}

export default Navigation;

