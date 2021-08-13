import { Link  } from "react-router-dom"
import "../styles/NaveBar.css"

function NaveBar() {
    return (
        <header>
            <nav className="navebar">
            <h2>LazyCode</h2>
            <ul>
            <li><Link to="/" className="nav-btn">Home</Link></li>
                <li><Link to="/search" className="nav-btn">Search</Link></li>
                <li><Link to="/feautured" className="nav-btn">Feautured</Link></li>
                <li><Link to="/favorites" className="nav-btn">Favorites</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default NaveBar
