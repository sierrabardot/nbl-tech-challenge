import { Link } from "react-router-dom";

export function Footer() {
    return (
        <>
        <footer className="d-flex container-fluid bg-dark-grey py-5 px-0 mt-3">
            <div className="d-flex w-100 flex-column align-items-center justify-content-center">
                <nav className="navbar">
                    <Link to="/" className="navbar-brand text-white"><h2>The Corner Store</h2></Link>
                </nav>
                <div className="linebreak my-4"></div>
                <span className="mb-3 mb-md-0 pt-3 small text-white">Copyright © 2024 The Corner Store Inc. All Rights Reserved.</span>
            </div>
        </footer>
        </>
    )
}