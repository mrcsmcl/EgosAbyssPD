import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
