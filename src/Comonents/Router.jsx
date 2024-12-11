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
import PropertyDetailsPage from "./PropertyDetails";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Router() {

  // const [savedItems, setSavedItems] = useState([]);

  // // Define the saveItem function
  // const saveItem = (item) => {
  //   // Check if the item is already saved
  //   if (!savedItems.some((saved) => saved.id === item.id)) {
  //     setSavedItems([...savedItems, item]);
  //   }
  // };

  const [savedItems, setSavedItems] = useState([]);

  // Load saved items from local storage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("savedItems"));
    if (storedItems) {
      setSavedItems(storedItems);
    }
  }, []);

  // Save an item to state and local storage
  const saveItem = (item) => {
    if (!savedItems.some((saved) => saved.id === item.id)) {
      const updatedItems = [...savedItems, item];
      setSavedItems(updatedItems);
      localStorage.setItem("savedItems", JSON.stringify(updatedItems));
    }
  };

  // Delete an item from state and local storage
  const deleteItem = (id) => {
    const updatedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedItems));
  };

  // return (
  //   <div>
  //     {/* Pass saveItem as a prop to Loginhome */}
  //     <Latestlisted saveItem={saveItem} />
  //     <SaveItem savedItems={savedItems} />
  //   </div>
  // );


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
              <Loginhome saveItem={saveItem} />
            </Layout2>
          }
        />

        <Route
          path="/Savepage"
          element={
            <Layout2>
              <Savepage savedItems={savedItems} deleteItem={deleteItem}/>
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

        <Route path="/Profilepage" element={<Layout3><Profilepage /></Layout3>} />

        <Route path="/MyListPage" element={<Layout3><MyListPage /></Layout3>} />

        <Route path="/Listingpage" element={<Layout3><Listingpage /></Layout3>} />

        <Route path="/SignInPage" element={<SignInPage/>}/>

        <Route path="/Registerpage" element={<Registerpage/>}/>

        <Route path="PropertyDetailsPage" element={<Layout2><PropertyDetailsPage/></Layout2>}/>

      </Routes>
    </BrowserRouter>
  );
}
