import { Link } from "react-router-dom";

function Nav() {

    return (
        <div>
            <ul className="navbar nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link" >About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/single-player"} className="nav-link" >Single Player Action Games</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/multiplayer"} className="nav-link" >Multiplayer Action Games</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;