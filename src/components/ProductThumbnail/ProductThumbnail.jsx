import { Link } from "react-router-dom";

export function ProductThumbnail({ product }) {

    return (
        <>
        <Link to={`/details/${product.id}`}>
            <h4>{product.title}</h4>
        </Link>
        <img src={product.thumbnail} alt={`Thumbnail image of ${product.title}`} />
        <p>${product.price}</p>
        </>
    )
}