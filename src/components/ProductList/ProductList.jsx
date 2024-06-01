import { useProducts } from "../../contexts/ProductsProvider";
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail";

export function ProductList() {
    const { products } = useProducts();

    return (
        <>
        <h3>List of Products</h3>
        <ul>
            {products ? (
                products.map((product) => (
                    <li key={product.id}>
                        <ProductThumbnail product={product} />
                    </li>
                ))
            ) : (
                <p>No Products Found</p>
            )}
        </ul>
    </>
    );
}
