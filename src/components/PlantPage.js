import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))

  },[])

  function handleNewPlant(newPlant){
    //console.log(newPlant)
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(data => setPlants([...plants, data]))
  }

  function onMcSerch(columbus){
    setSearch(columbus)
  }


  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  function onUpdatePlant(updatedPlant){
    console.log(updatedPlant)
    const updatedPlants = filteredPlants.map(plant => {
      if(updatedPlant.id == plant.id){
        return updatedPlant
      }
      else {
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  function onDeletePlant(deletedPlant){
    console.log(deletedPlant)
    const updatedPlants = filteredPlants.filter(plant => plant != deletedPlant)
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={handleNewPlant}/>
      <Search mcSerch={onMcSerch}/>
      <PlantList plants = {filteredPlants} updatePlant={onUpdatePlant} deletePlant={onDeletePlant}/>
    </main>
  );
}

export default PlantPage;
