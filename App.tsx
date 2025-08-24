import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InteriorPainting from './pages/InteriorPainting';
import ExteriorPainting from './pages/ExteriorPainting';
import CommercialPainting from './pages/CommercialPainting';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interior-painting" element={<InteriorPainting />} />
        <Route path="/exterior-painting" element={<ExteriorPainting />} />
        <Route path="/commercial-painting" element={<CommercialPainting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;