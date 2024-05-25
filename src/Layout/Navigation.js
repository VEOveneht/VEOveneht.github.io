import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CV from '../assets/img/CV.png'
import Menu from '../assets/img/svg/menu.svg'
import Close from '../assets/img/svg/close.svg'

// ! CSS
import '../assets/css/navigation.css';

const Navigation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isBanner, setIsBanner] = useState(false);


    const showSide = () => {
        setSidebarVisible(true);
    };
    const hideSide = () => {
        setSidebarVisible(false);
    };
    
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
    useEffect(() => {
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

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

    return (
    <header>
        <div id='portofolio'></div>
        <p className="scrollup"><img src="./assets/img/svg/up.svg" alt='up'/></p>
        <nav role="navigation" className={isSticky ? 'sticky' : ''}>
            <p className="logo">LISAN<a id="blink" href>_</a></p>
            <div className='links'>
                <Link className="list_nav" to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
                <a className="list_nav" href="#blog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blog</a>
                <a className="list_nav" href="#store" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Store</a>
                <a className="list_nav" href="#portofolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portofolio</a>
                <a className="list_nav" href={CV} download="Lisan Shidqi Farizan" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>CV</a>
            </div>
            <div className="sidebar" style={{ width: isSidebarVisible ? '100%' : '0' }}>
                <p>LISAN<a id="blink" href>_</a></p>
                <a id="close" onClick={hideSide} href><img src={Close} alt="close" style={{width: 25 }}/></a>
                <div className='side'>
                    <Link className="list_nav" to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
                    <a className="list_nav" href="#blog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blog</a>
                    <a className="list_nav" href="#store" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Store</a>
                    <a className="list_nav" href="#portofolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portofolio</a>
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

