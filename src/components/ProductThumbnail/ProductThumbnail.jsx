import styles from "./ProductThumbnail.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React from 'react';

const ProductThumbnail = React.memo(({ product }) => {
    return (
        <div className={`card ${styles.productCard}`}>
            <Link to={`/details/${product.id}`} className="d-flex justify-content-center">
                <LazyLoadImage
                    className={`card-image-top img ${styles.productThumbnail}`}
                    src={product.thumbnail}
                    alt={`Thumbnail image of ${product.title}`}
                    effect="blur"
                    width="300" height="300" 
                />
            </Link>
            <div className="card-body d-flex flex-md-row flex-column justify-content-md-between justify-content-evenly">
                <Link className="text-decoration-none text-black col-md-9" to={`/details/${product.id}`}>
                    <p className="card-title link small m-0">{product.title}</p>
                </Link>
                <p className="card-text fw-bold small">${product.price}</p>
            </div>
        </div>
    )
})

export default ProductThumbnail;