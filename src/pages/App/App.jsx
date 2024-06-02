import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home.jsx"
import { ErrorBoundary } from "react-error-boundary";
import { Details } from "../Details/Details.jsx"
import { ProductsProvider } from "../../contexts/ProductsProvider.jsx"
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

function App() {

    return (
        <>
        <ProductsProvider>
            <div className="main-content">
                <Navbar />
                <main className="container-fluid">
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/details/:id" element={<Details />} />
                            {/* Catch all navigates to "/" if the URL does not match any specified pattern */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </ErrorBoundary>
                </main>
            </div>
            <Footer />
        </ProductsProvider>
        </>
    )
}

export default App
