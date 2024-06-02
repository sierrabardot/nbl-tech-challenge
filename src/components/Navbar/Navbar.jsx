import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <>
        <header className="container-fluid bg-orange">
            <nav className="navbar py-3" aria-label="Main Navigation">
                <div className="container d-flex justify-content-between">
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.svg" alt="The Corner Store Logo" height="95" width="90" />
                    </Link>
                    <div>
                        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    to="/" 
                                    className="nav-link"
                                    aria-current="page" role="menuitem"
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}