import GamesDisplay from './components/GamesDisplay.js';

import './App.css';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostViewer from './components/PostViewer.js';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/singleplayer" element={ <PostViewer category={'singleplayer'}/> } />
          <Route path="/multiplayer" element={ <PostViewer category={'multiplayer'}/> } />
          <Route path="/gamesdisplay" element={ <GamesDisplay/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
