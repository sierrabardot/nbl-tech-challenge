import { useProducts } from "../../contexts/ProductsProvider";

export function Home() {
    const { products } = useProducts()
    
    console.log(products)

    return (
        <>
        <h1>Home</h1>
        {products.map((product) => (
            <p>{product.id}</p>
        ))}
        </>
    )
}