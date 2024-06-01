export function ItemDetails({ product }) {

    return (
        <>
        {product && (
            <>
            <h2>{product.title}</h2>
            {product.images.map((img, i) => {
                return <img key={i} src={img} alt={`Image of ${product.title} #${i + 1}`} />
            })}
            </>
        )}
        </>
    )
}