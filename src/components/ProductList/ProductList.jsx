import { useProducts } from "../../contexts/ProductsProvider";
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function ProductList() {
    const { products, loading } = useProducts();

    return (
        <>
        <ul>
            {loading ? (
                <LoadingSpinner />
            ) : products.length !== 0 ? (
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
