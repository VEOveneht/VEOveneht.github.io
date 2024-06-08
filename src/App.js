import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Store from './Pages/Store';
import Portofolio from './Pages/Portofolio';
import Disclaimer from './Pages/Disclaimer';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Bot from './Pages/Bot';
// ! Blog Post
import LevelingToram from './Post/ToramOnlineLeveling';
import ToramGuide from './Post/ToramOnlineGuide';
import BahanMQToram from './Post/BahanMQToram';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Routes>
          <Route component={NotFound} />
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/VeoBot' element={<Bot />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/portofolio' element={<Portofolio />}/>
          <Route path='/disclaimer' element={<Disclaimer />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          {/* BLOG POST */}
          <Route path='/blog/leveling-toram-online' element={<LevelingToram />} />
          <Route path='/blog/toram-online-guide' element={<ToramGuide />} />
          <Route path='/blog/bahan-mq-toram' element={<BahanMQToram />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;