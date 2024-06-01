import { useEffect, useState } from "react"
import { fetchProductList } from "../../api/dummy-json-api.js"

export function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProductList()
                setProducts(productsData.data.products)
            } catch (error) {
                console.error(error.message)
            }
        }
        getProducts()
    }, [])

    return (
        <>
            <h1>Home</h1>
            {products.map((product) => (
                <p>{product.id}</p>
            ))}
        </>
    )
}