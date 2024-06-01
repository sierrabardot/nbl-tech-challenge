import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Corner Shop Co.</Link>
            </div>
        </nav>
        </>
    )
}