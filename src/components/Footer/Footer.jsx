import { Link } from "react-router-dom";

export function Footer() {
    return (
        <>
        <div className="container-fluid p-0">
            <footer className="d-flex flex-wrap border-top justify-content-between align-items-center py-2 my-3">
                <div class="col-md-4 d-flex align-items-center">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">Corner Shop Co.</Link>
                            <span class="mb-3 mb-md-0 small text-muted">© 2024 Corner Shop Co. All Rights Reserved.</span>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
        </>
    )
}