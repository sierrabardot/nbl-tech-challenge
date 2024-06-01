import { Link } from "react-router-dom";

export function Breadcrumb({ product }) {

    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
            </ol>
        </nav>
        </>
    )
}