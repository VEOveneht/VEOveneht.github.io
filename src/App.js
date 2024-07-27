import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Store from './components/Store';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 1) {
        document.getElementById('nav').classList.add('sticky');
        document.getElementById('banner').classList.add('banner');
      } else {
        document.getElementById('nav').classList.remove('sticky');
        document.getElementById('banner').classList.remove('banner');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    const handleMouseEnter = (e) => {
      document.querySelectorAll('.list_nav').forEach((otherItem) => {
        if (otherItem === e.target) {
          otherItem.style.color = 'white';
        } else {
          otherItem.style.color = '#555555';
        }
      });
    };
  
    const handleMouseLeave = () => {
      document.querySelectorAll('.list_nav').forEach((otherItem) => {
        otherItem.style.color = 'white';
      });
    };
  
    document.querySelectorAll('.list_nav').forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.list_nav').forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  const showSide = () => {
    document.getElementById('sidebar').style.display = 'block';
  };
  
  const hideSide = () => {
    document.getElementById('sidebar').style.display = 'none';
  };
  
  return (
    <Router>
      <nav role="navigation" id="nav">
        <p className="logo">LISAN<a id="blink" href>_</a></p>
        <div className="links">
          <Link className="list_nav" to="/">Home</Link>
          <Link className="list_nav" to="/blog">Blog</Link>
          <Link className="list_nav" to="/store">Store</Link>
        </div>
        <div id="sidebar">
          <p>LISAN<a id="blink" href>_</a></p>
          <a id="close" onClick={hideSide} href><span className="material-symbols-outlined">close</span></a>
          <div className="side">
            <Link className="list_nav" to="/">Home</Link>
            <Link className="list_nav" to="/blog">Blog</Link>
            <Link className="list_nav" to="/store">Store</Link>
          </div>
        </div>
        <a id="menu" onClick={showSide} href>
          <span className="material-symbols-outlined">menu</span>
        </a>
      </nav>

      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/store" component={Store} />
          <Route component={NotFound} />
        </Routes>
      </main>

      <footer>
        <div>
          <ul className="foot_links">
            <li><Link className="list_foot" to="/">HOME</Link></li>
            <li><Link className="list_foot" to="/sitemap.xml">SITEMAP</Link></li>
            <li><Link className="list_foot" to="/store">STORE</Link></li>
            <li><Link className="list_foot" to="/disclaimer">DISCLAIMER</Link></li>
            <li><Link className="list_foot" to="/contact">CONTACT</Link></li>
          </ul>
          <p>Made By Lisan Shidqi Farizan |&copy;2023 VEOveneht|</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;