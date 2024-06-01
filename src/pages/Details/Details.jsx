import { useParams } from "react-router-dom"
import { useProducts } from "../../contexts/ProductsProvider"
import { ItemDetails } from "../../components/ItemDetails/ItemDetails";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export function Details() {
    const { products } = useProducts();
    const { id } = useParams();
    const product = products[id - 1];

    return (
        <>
        {product && (
            <>
                <Breadcrumb product={product} />
                <ItemDetails product={product} />
            </>
        )}
        </>
    )
}