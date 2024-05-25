import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Pages/Home';
// import Blog from './Pages/Blog';
import About from './Pages/About';
import Store from './Pages/Store';
import Disclaimer from './Pages/Disclaimer';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route component={NotFound} />
          <Route path='/' element={<Home />}/>
          {/* <Route path='/blog' element={<Blog />}/> */}
          <Route path='/about' element={<About />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/disclaimer' element={<Disclaimer />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;