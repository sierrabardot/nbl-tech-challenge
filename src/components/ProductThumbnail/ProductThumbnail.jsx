import styles from "./ProductThumbnail.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function ProductThumbnail({ product }) {
    return (
        <>
        <Link to={`/details/${product.id}`} className="text-decoration-none" aria-label={`See more details about ${product.title}`}>
            <div className={`card ${styles.productCard}`}>
                <div className="d-flex justify-content-center">
                    <LazyLoadImage
                        className={`card-image-top img ${styles.productThumbnail}`}
                        src={product.thumbnail}
                        alt={`Thumbnail image of ${product.title}`}
                        effect="blur"
                        width="300" height="300" 
                    />
                </div>
                <div className="card-body d-flex flex-md-row flex-column justify-content-md-between justify-content-evenly">
                    <p className="text-black col-md-9 card-title link small m-0">{product.title}</p>
                    <p className="card-text fw-bold small">${product.price}</p>
                </div>
            </div>
        </Link>
        </>
    )
}