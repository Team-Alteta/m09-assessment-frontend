import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function Nav() {
    const { user, logout } = useContext(AuthContext);
    return (
        <div>
            <ul className="navbar nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link" >About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/singleplayer"} className="nav-link" >Single Player Action Games</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/multiplayer"} className="nav-link" >Multiplayer Action Games</Link>
                </li>
            {!user && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </>)
            }
            {user && ( <li className="nav-item">
                <span className="badge rounded-pill nav-link">
                {user.username}
                </span>
                <button 
                    onClick={logout}
                    className="btn btn-outline-danger"
                >
                Log out
              </button>
            </li>
          )}
            </ul>
        </div>
    );
}

export default Nav;