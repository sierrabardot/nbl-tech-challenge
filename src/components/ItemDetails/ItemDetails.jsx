export function ItemDetails({ product }) {
    console.log(product)

    return (
        <>
        {product && (
            <>
                <h2 data-testid="product-title">{product.title}</h2>
                {product.images.map((img, i) => {
                    return <img key={i} src={img} alt={`Image of ${product.title} #${i + 1}`} />
                })}
                <p>${product.price}</p>
                <p>{product.description}</p>
            </>
        )}
        </>
    )
}