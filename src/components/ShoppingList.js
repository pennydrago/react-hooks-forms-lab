import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterItem, setFilterItem] = useState("");
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setFilterItem(event.target.value);
  }

  function handleNewItem(item) {
    setItems([...items, item])
  }

  const itemsToDisplay = items.filter((item) => {
    if (filterItem !== "") {
      if (!item.name.includes(filterItem)) {
        return false
      }
    }

    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={filterItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
