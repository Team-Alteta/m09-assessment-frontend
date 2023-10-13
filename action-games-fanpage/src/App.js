import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamesDisplay from './components/GamesDisplay.js';
import LoginForm from './components/LoginForm.js';
import './App.css';
import Landing from './components/Landing';
import PostViewer from './components/PostViewer.js';
import Nav from './components/Nav.js';
import Error from "./components/Error";
import AuthContext from "./contexts/AuthContext";

import { refreshToken, logout } from "./services/authAPI";

const TIMEOUT_MILLISECONDS = 14 * 60 * 1000;

function App() {
  useEffect(() => {
    document.title = 'Ready, Set, Fight!';
  }, []);

  const [user, setUser] = useState();
  const [initialized, setInitialized] = useState(false);

  const resetUser = useCallback(() => {
    refreshToken()
      .then((user) => {
        setUser(user);
        setTimeout(resetUser, TIMEOUT_MILLISECONDS);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setInitialized(true));
  }, []);

  useEffect(() => {
    resetUser();
  }, [resetUser]);

  const auth = {
    user: user,
    handleLoggedIn(user) {
      setUser(user);
      setTimeout(resetUser, TIMEOUT_MILLISECONDS);
    },
    hasAuthority(authority) {
      return user?.authorities.includes(authority);
    },
    logout() {
      logout();
      setUser(null);
    },
  };

  if (!initialized) {
    return null;
  }

  const renderWithAuthority = (Component, ...authorities) => {
    for (let authority of authorities) {
      if (auth.hasAuthority(authority)) {
        return <Component />;
      }
    }
    return <Error />;
  };


  return (
    <div>
      <h1 className='header'>Ready, Set, Fight!</h1>
      <AuthContext.Provider value={auth}>
      <Router>
        <main className='container'>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/singleplayer" element={<PostViewer category={'singleplayer'} />} />
            <Route path="/multiplayer" element={<PostViewer category={'multiplayer'} />} />
            <Route path="/gamesdisplay" element={<GamesDisplay />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
