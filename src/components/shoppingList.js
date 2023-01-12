import React from "react";
import list from "../data";
import Cards from "./card";
import "../styles/shoppingList.css";

const ShoppingList = ({ handleClick }) => {
  return (
    <div className="section">
      {list.map((item) => (
        <Cards key={item.key} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default ShoppingList;
