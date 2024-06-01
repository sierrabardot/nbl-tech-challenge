import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home.jsx"
import { ErrorBoundary } from "react-error-boundary";
import { Details } from "../Details/Details.jsx"
import { ProductsProvider } from "../../contexts/ProductsProvider.jsx"

function App() {

    return (
        <>
        <ProductsProvider>
            <h1>Corner Shop Co.</h1>
            <main>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                        {/* Catch all navigates to "/" if the URL does not match any specified pattern */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </ErrorBoundary>
            </main> 
        </ProductsProvider>
        </>
    )
}

export default App
