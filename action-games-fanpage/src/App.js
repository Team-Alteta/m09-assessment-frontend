import GamesDisplay from './components/GamesDisplay.js';

import './App.css';
import Landing from './components/Landing';
import { Router, Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
