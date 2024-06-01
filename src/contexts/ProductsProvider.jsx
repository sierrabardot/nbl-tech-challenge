import { createContext, useContext, useState, useEffect } from "react";
import { fetchProductList } from "../api/dummy-json-api";

const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProductList();
                setProducts(productsData.data.products);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching products: ${error.message}`);
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loading, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductsContext);
};
