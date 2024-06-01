import { useProducts } from "../../contexts/ProductsProvider"
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail"


export function ProductList() {
    const { products } = useProducts()  

    return (
        <>
        {products && (
            products.map((product) => (
                <ProductThumbnail key={product.id} product={product} />
            ))
        )}
        </>
    )
}