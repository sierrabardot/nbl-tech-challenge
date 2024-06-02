import styles from "./ProductThumbnail.module.css";
import { Link } from "react-router-dom";

export function ProductThumbnail({ product }) {

    return (
        <div className={`card ${styles.productCard}`}>
            <Link to={`/details/${product.id}`}>
                <img className="card-img-top" src={product.thumbnail} alt={`Thumbnail image of ${product.title}`} />
            </Link>
            <div className="card-body d-flex flex-md-row flex-column justify-content-md-between justify-content-evenly">
                <Link className="text-decoration-none text-black col-md-9" to={`/details/${product.id}`}>
                    <p className="card-title link small m-0">{product.title}</p>
                </Link>
                <p className="card-text fw-bold small">${product.price}</p>
            </div>
        </div>
    )
}