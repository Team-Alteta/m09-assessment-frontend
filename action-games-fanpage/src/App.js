import GamesDisplay from './components/GamesDisplay.js';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostViewer from './components/PostViewer.js';
import Nav from './components/Nav.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Ready, Set, Fight!';
  }, []);

  return (
    <div>
      <h1 className='header'>Ready, Set, Fight!</h1>
      <Router>
        <main className='container'>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/singleplayer" element={<PostViewer category={'singleplayer'} />} />
            <Route path="/multiplayer" element={<PostViewer category={'multiplayer'} />} />
            <Route path="/gamesdisplay" element={<GamesDisplay />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
