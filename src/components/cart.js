import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import CheckoutModal from "./checkout";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Image, Space, Table, Tag } from "antd";

const Cart = ({ cart, setCart }) => {
  const color = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  const [price, setPrice] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.key !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const columns = [
    {
      title: "Book image",
      dataIndex: "img",
      key: "img",
      render: (image) => <Image height={100} width={70} src={image} alt="" />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title) => (
        <p style={{ fontSize: 20, fontWeight: "bold" }}>{title}</p>
      ),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (author) => {
        let colorIndex = Math.floor(Math.random() * color.length);
        return (
          <Tag color={color[colorIndex]} key={author}>
            {author}
          </Tag>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Quantity",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <Button
            style={{
              color: "white",
              backgroundColor: "skyblue",
            }}
            icon={<CloseOutlined />}
            shape="round"
            onClick={() => handleRemove(item.key)}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      <Table
        className="content"
        size="large"
        pagination={false}
        columns={columns}
        dataSource={cart}
      />
      <div className="footer">
        <div className="total">
          <span>Total Price of your Cart</span>
          <span> ${price}</span>
        </div>
        <Button
          className="checkout"
          size="large"
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "skyblue",
          }}
          onClick={() => setModalStatus(true)}
        >
          Checkout
        </Button>
        <CheckoutModal
          cart={cart}
          price={price}
          modalStatus={modalStatus}
          handleModal={setModalStatus}
        />
      </div>
    </div>
  );
};

export default Cart;
