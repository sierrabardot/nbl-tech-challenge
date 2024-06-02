import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <>
        <header className="container-fluid bg-orange">
            <nav className="navbar py-3">
                <div className="container d-flex justify-content-between">
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.svg" alt="The Corner Store Logo" />
                    </Link>
                    <div>
                        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => `nav-link ${isActive ? 'text-light-grey' : 'text-white'}`} 
                                    aria-current="page"
                                >Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}