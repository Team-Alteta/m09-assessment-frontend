import GamesDisplay from './components/GamesDisplay.js';
import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className='header'>Ready, Set, Fight!</h1>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/singleplayer" element={ <PostViewer category={'singleplayer'}/> } />
          <Route path="/multiplayer" element={ <PostViewer category={'multiplayer'}/> } />
          <Route path="/gamesdisplay" element={ <GamesDisplay/> } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
