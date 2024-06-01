import { useParams } from "react-router-dom"
import { useProducts } from "../../contexts/ProductsProvider"
import { ItemDetails } from "../../components/ItemDetails/ItemDetails";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export function Details() {
    const { products } = useProducts();
    const { id } = useParams();
    const product = products.find(product => product.id === +id);

    return (
        <>
        {product ? (
            <>
                <Breadcrumb product={product} />
                <ItemDetails product={product} />
            </>
        ) : (
            <p>404: Product Could Not Be Found</p>
        )}
        </>
    )
}