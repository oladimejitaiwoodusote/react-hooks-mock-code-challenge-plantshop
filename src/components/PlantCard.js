import React, {useState} from "react";

function PlantCard({plant, updatePlant, deletePlant}) {

  const [stock, setStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  function handleStock(e){
    console.log(e.target.value)
    setStock(false)
  }

  function handleNewPrice(e){
    setNewPrice(e.target.value)
  }
  
  function handleNewPriceSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(response => response.json())
    .then(data => updatePlant(data))
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE"
    })
    deletePlant(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick ={handleDelete}>Delete Plant</button>
      {stock ? (
        <button onClick = {handleStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <form onSubmit = {handleNewPriceSubmit}>
        <input placeholder="Enter Updated Price" onChange ={handleNewPrice} value = {newPrice}></input>
      </form>
    </li>
  );
}

export default PlantCard;
