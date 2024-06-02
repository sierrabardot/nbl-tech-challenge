import { useProducts } from "../../contexts/ProductsProvider";
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import styles from './ProductList.module.css';

// ProductList component displays a list of product thumbnails - gallery style
export function ProductList() {
    const { products, loading } = useProducts();

    return (
        <>
        <div className="my-3 my-md-4 container">
            <h4 className="mb-4">Our Collection of Products</h4>

                {/* Conditional rendering based on loading state and product list */}
                {loading ? (
                    <div className={`${styles.placeholderContainer}`}>
                        <LoadingSpinner />
                    </div>
                ) : products.length !== 0 ? (
                    // Display product thumbnails if products are available
                    <div className={`row row-cols-2 row-cols-md-4 g-3 ${styles.placeholderContainer}`}>
                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <ProductThumbnail product={product} />
                        </div>
                    ))}
                        </div>
                ) : (
                    // Shows message if no products are found
                    <p>No Products Found</p>
                )}
        </div>
        </>
    );
}
