import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Store from './Pages/Store';
import Disclaimer from './Pages/Disclaimer';
import Contact from './Pages/Contact';
import Sitemap from './Pages/Sitemap';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Store' element={<Store />}/>
          <Route path='/Disclaimer' element={<Disclaimer />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Sitemap' element={<Sitemap />}/>
          <Route path='/Privacy_Policy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;