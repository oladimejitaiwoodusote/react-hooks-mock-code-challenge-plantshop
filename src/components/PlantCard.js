import React, {useState} from "react";

function PlantCard({plant}) {

  const [stock, setStock] = useState(true)

  function handleStock(e){
    console.log(e.target.value)
    setStock(false)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick = {handleStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
