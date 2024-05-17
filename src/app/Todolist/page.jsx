"use client";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [items, setItems] = useState([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);
  const [fruitItems, setFruitItems] = useState([]);
  const [vegetableItems, setVegetableItems] = useState([]);

  const handleAllItem = (item) => {
    setItems((AllItem) => AllItem.filter((i) => i.name !== item.name));

    if (item.type === "Fruit") {
      setFruitItems([...fruitItems, item]);
      setTimeout(() => {
        setFruitItems((prevFruitItems) =>
          prevFruitItems.filter((i) => i.name !== item.name)
        );
        setItems((AllItem) => [...AllItem, item]);
      }, 5000)
    } else {
      setVegetableItems([...vegetableItems, item]);
      setTimeout(() => {
        setVegetableItems((prevVegetableItems) =>
          prevVegetableItems.filter((i) => i.name !== item.name)
        );
        setItems((AllItem) => [...AllItem, item]);
      }, 5000);
    }
  };


  const handleItem = (item) => {
    setItems([...items, item]);
    if (item.type === "Fruit") {
      setFruitItems(fruitItems.filter((fruit) => fruit.name !== item.name));
    } else {
      setVegetableItems(vegetableItems.filter((vegetable) => vegetable.name !== item.name));
    }
  };
  

  return (
    <div style={{ display: "flex", margin: "30px 15%" }}>
      <div
        style={{
          width: "33.33333%",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h2
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Main List
        </h2>
        {items.map((item) => (
          <button
            style={{
              margin: "2.5px",
              width: "100%",
              padding: "10px 0",
              height: "40px",
            }}
            key={`${item.name}-items`}
            onClick={() => handleAllItem(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div style={{ width: "33.33333%", padding: "0 20px" }}>
        <h2
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Fruit
        </h2>
        {fruitItems.map((item) => (
          <button
            style={{
              margin: "2.5px",
              width: "100%",
              padding: "10px 0",
              height: "40px",
            }}
            key={`${item.name}-fruitItems`}
            onClick={() => handleItem(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div style={{ width: "33.33333%", padding: "0 20px" }}>
        <h2
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Vegetable
        </h2>
        {vegetableItems.map((item) => (
          <button
            style={{
              margin: "2.5px",
              width: "100%",
              padding: "10px 0",
              height: "40px",
            }}
            key={`${item.name}-vegetableItems`}
            onClick={() => handleItem(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
