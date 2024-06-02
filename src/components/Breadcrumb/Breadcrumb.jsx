import { Link } from "react-router-dom";

export function Breadcrumb({ product }) {

    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-3">
                <li className="breadcrumb-item"><Link to="/" className=" text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
            </ol>
        </nav>
        </>
    )
}