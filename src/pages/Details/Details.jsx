import { useParams } from "react-router-dom"
import { useProducts } from "../../contexts/ProductsProvider"
import { ItemDetails } from "../../components/ItemDetails/ItemDetails";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

// Details component displays detailed information about a specific product
export function Details() {
    const { products, loading } = useProducts();
    const { id } = useParams();

    // Finds the product that matches the id retrieved from useParams() hook
    const product = products.find(product => product.id === +id);

    return (
        <div className="container">
        {loading ? (
            <LoadingSpinner />
        ) : product ? (
            <>
                <Breadcrumb product={product} />
                <ItemDetails product={product} />
            </>
        ) : (

            // Show 404 message if the product is not found
            <p>404: Product Could Not Be Found</p>
        )}
        </div>
    )
}