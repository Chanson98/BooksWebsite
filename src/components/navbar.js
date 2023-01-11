import React from "react";
import "../styles/navbar.css";
import { ReadOutlined } from '@ant-design/icons';

const NNavbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow("ShoppingList")}>
          <ReadOutlined style={{marginRight:10}}/>
          Book World
        </span>
        <div className="cart" onClick={() => setShow("cart")}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NNavbar;


