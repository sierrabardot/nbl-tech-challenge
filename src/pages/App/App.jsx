import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home.jsx"
import { Details } from "../Details/Details.jsx"

function App() {

    return (
        <>
            <h1>NBL Technical Challenge</h1>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                    {/* Catch all navigates to "/" if the URL does not match any specified pattern */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </>
    )
}

export default App
