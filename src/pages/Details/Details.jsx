import { useParams } from "react-router-dom"
import { useProducts } from "../../contexts/ProductsProvider"
import { ItemDetails } from "../../components/ItemDetails/ItemDetails";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function Details() {
    const { products, loading } = useProducts();
    const { id } = useParams();
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
            <p>404: Product Could Not Be Found</p>
        )}
        </div>
    )
}