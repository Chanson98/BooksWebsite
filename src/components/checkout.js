import React from "react";
import "../styles/cart.css";
import { Modal } from "antd";

const CheckoutModal = ({ cart, price, modalStatus, handleModal }) => {
  return (
    <Modal
      title="Check out Confirmation"
      centered
      open={modalStatus}
      onOk={() => handleModal(false)}
      onCancel={() => handleModal(false)}
    >
      <p>
        Your cart includes {cart.length}
        {cart.length > 1 ? " books" : " book"}.{" "}
      </p>
      <p>The total price is ${price}.</p>
      <p>Click ok to finish your payment.</p>
    </Modal>
  );
};
export default CheckoutModal;
