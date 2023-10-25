
import React,{useState} from "react";
import "../index.css";
function Item({ name, category }) {
  const [cart,setCart]= useState(false);
 
  function handleCart(){
   setCart(!cart);

    }
    const cartStatus=cart ? "in-cart":"";

  
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
