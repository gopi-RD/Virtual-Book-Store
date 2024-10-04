import {Link} from "react-router-dom"
import "./index.css"
const Header=()=>{
    return (
        <div className="container">
        <header className="header-container">
            <h1 className="website-logo">Virtual Book Store</h1>
            <nav className="nav-bar-container">
                <ul className="nav-bar-list-items">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>

                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/my-library">
                            My Library
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header;