import React from "react";
import { Card } from "antd";
import CardDescription from "./cardDescription";

const { Meta } = Card;
const Cards = ({ item, handleClick }) => {
  
  return (
    <div className="cards">
      <Card
        hoverable
        style={{ width: 270, height: 500 }}
        cover={<img alt="example" src={item.img} style={{ height: 300 }} />}
      >
        <Meta
          size="large"
          title={item.title}
          description={
            <CardDescription item={item} handleClick={handleClick} />
          }
        />
      </Card>
    </div>
  );
};

export default Cards;
