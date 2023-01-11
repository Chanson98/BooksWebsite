import React from "react";
import { Button, Space } from 'antd';
import { LikeOutlined,ShoppingCartOutlined} from '@ant-design/icons';


const CardDescription = ({ item,handleClick }) => {
  
  return (
      <div className="details">
        <p>Author: {item.author}</p>
        <p>Price:  ${(item.price && item.price>=0)?item.price:"Not available"}</p>
        <p>Description: {item.description}</p>
         <Space wrap>
      <Button  type="primary" icon={<LikeOutlined />}>
        Like this
      </Button>
      <Button  type="primary" onClick={() => handleClick(item)} icon={<ShoppingCartOutlined  />}>
        Add Cart
      </Button>
    </Space>
         </div>
  
  );
};

export default CardDescription;
