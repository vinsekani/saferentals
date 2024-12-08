import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Layout from "../Pages/Layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout><Homepage /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}
