import 'antd/dist/reset.css';
import './App.css';
import NNavbar from './components/navbar';
import ShoppingList from './components/shoppingList';
import Cart from './components/cart';
import React, {useState} from 'react';
import {message} from 'antd';

function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'You have successfully added it into Shopping Cart',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Item is already added to your cart',
    });
  };
  const handleClick = (item)=>{
      if (cart.indexOf(item) !== -1){
        error();
        return;
      } 
      setCart([...cart, item]);
      console.log(cart);
      success();

    };
  return (
   <React.Fragment>
    <NNavbar setShow={setShow} size={cart.length}/>
    {contextHolder}
    {show ? (
        <ShoppingList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
   </React.Fragment>
  );
}

export default App;
