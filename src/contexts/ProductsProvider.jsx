import { createContext, useContext, useState, useEffect } from "react";
import { fetchProductList } from "../api/dummy-json-api";

const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProductList();
                setProducts(productsData.data.products);
            } catch (error) {
                console.error(`Inside Products Provider: ${error.message}`);
            }
        }
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductsContext);
};