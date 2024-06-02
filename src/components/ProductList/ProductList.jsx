import { useProducts } from "../../contexts/ProductsProvider";
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function ProductList() {
    const { products, loading } = useProducts();

    return (
        <>
        <div className="my-3 my-md-4 container">
            <h4 className="mb-4">Our Collection of Products</h4>
                {loading ? (
                    <LoadingSpinner />
                ) : products.length !== 0 ? (
                    <div className="row row-cols-2 row-cols-md-4 g-2">
                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <ProductThumbnail product={product} />
                        </div>
                    ))}
                        </div>
                ) : (
                    <p>No Products Found</p>
                )}
        </div>
        </>
    );
}
