import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Layout from "../Pages/Layout";
import Loginhome from "../Pages/Loginhome";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout><Homepage /></Layout>} />

                    <Route path="/Loginhome" element={<Layout><Loginhome/></Layout>}/>
            </Routes>
        </BrowserRouter>
    );
}
