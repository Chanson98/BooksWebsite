import "antd/dist/reset.css";
import "./App.css";
import Navbar from "./components/navbar";
import ShoppingList from "./components/shoppingList";
import Cart from "./components/cart";
import React, { useState } from "react";
import { message } from "antd";

function App() {
  const [show, setShow] = useState("ShoppingList");
  const [cart, setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  
  const success = () => {
    messageApi.open({
      type: "success",
      content: "You have successfully added it into Shopping Cart",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Item is already added to your cart",
    });
  };
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) {
      error();
      return;
    }
    setCart([...cart, item]);
    success();
  };

  const contentView = () => {
    switch (show) {
      case "ShoppingList":
        return <ShoppingList handleClick={handleClick} />;
      case "cart":
        return <Cart cart={cart} setCart={setCart} />;
      default:
        return <ShoppingList handleClick={handleClick} />;
    }
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {contextHolder}
      {contentView()}
    </React.Fragment>
  );
}

export default App;
