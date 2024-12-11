import React, { useState } from "react";
import Latestlisted from "./Latestlisted";
import SaveItem from "./SaveItem";

export default function ParentComponent() {
  const [savedItems, setSavedItems] = useState([]);

  // Define the saveItem function
  const saveItem = (item) => {
    setSavedItems((prevItems) => [...prevItems, item]);
    console.log("Saved item:", item);
  };

  return (
    <div>
      {/* Pass saveItem as a prop to Loginhome */}
      <Latestlisted saveItem={saveItem} />
      <SaveItem savedItems={savedItems} />
    </div>
  );
}
