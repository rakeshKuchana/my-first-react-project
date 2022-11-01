import { Link } from "react-router-dom";

const NavigationBar = () => {
    return <nav className="nav navbar-expand-lg navbar-light bg-light justify-content-end">
        <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service-orders">Service Orders</Link></li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Rakesh Kuchana
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">User details</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
}

export default NavigationBar;