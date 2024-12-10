import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Layout from "../Pages/Layout";
import Layout2 from "../Pages/Layout2";
import Loginhome from "../Pages/Loginhome";
import Savepage from "../Pages/Savepage";
import Closedmessagepage from "../Pages/Closedmessagepage";
import Layout3 from "../Pages/Layout3";
import Openmessagepage from "../Pages/Openmessagepage";
import Profilepage from "../Pages/Profilepage";
import MyListPage from "../Pages/MyListPage";
import Listingpage from "../Pages/Listingpage";
import SignInPage from "../Pages/SignInPage"
import Registerpage from "../Pages/Registerpage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />

        <Route
          path="/Loginhome"
          element={
            <Layout2>
              <Loginhome />
            </Layout2>
          }
        />

        <Route
          path="/Savepage"
          element={
            <Layout2>
              <Savepage />
            </Layout2>
          }
        />

        <Route
          path="/Closedmessagepage"
          element={
            <Layout3>
              <Closedmessagepage />
            </Layout3>
          }
        />

        <Route
          path="/Openmessagepage"
          element={
            <Layout3>
              <Openmessagepage />
            </Layout3>
          }
        />

        <Route path="/Profilepage" element={<Profilepage />} />

        <Route path="/MyListPage" element={<MyListPage />} />

        <Route path="/Listingpage" element={<Listingpage />} />

        <Route path="/SignInPage" element={<SignInPage/>}/>

        <Route path="/Registerpage" element={<Registerpage/>}/>

      </Routes>
    </BrowserRouter>
  );
}
