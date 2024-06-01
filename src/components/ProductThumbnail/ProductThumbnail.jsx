export function ProductThumbnail({ product }) {

    return (
        <>
        <img src={product.thumbnail} alt={`Thumbnail image of ${product.title}`} />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        </>
    )
}