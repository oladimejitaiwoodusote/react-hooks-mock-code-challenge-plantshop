import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [name,setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function handleName(e){
    setName(e.target.value)
  }

  function handleImage(e){
    setImage(e.target.value)
  }

  function handlePrice(e){
    setPrice(e.target.value)
  }

  function handlePlant(e){
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: price
    }
    addNewPlant(newPlant)
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handlePlant}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange ={handleName}/>
        <input type="text" name="image" placeholder="Image URL" value = {image} onChange = {handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {price} onChange = {handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
