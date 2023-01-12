import React from "react";
import "../styles/navbar.css";
import {ShoppingCartOutlined, ReadOutlined } from '@ant-design/icons';

const Navbar = ({ setShow, size }) => {
  return (
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow("ShoppingList")}>
          <ReadOutlined style={{marginRight:10}}/>
          Book World
        </span>
        <div className="cart" onClick={() => setShow("cart")}>
          <span>
          <ShoppingCartOutlined type="message" theme="outlined" />
          </span>
          <span>{size}</span>
        </div>
      </div>
  );
};

export default Navbar;


