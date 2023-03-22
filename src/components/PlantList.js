import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePlant, deletePlant}) {

  const plantList = plants.map(plant => {
    return <PlantCard key ={plant.id} plant={plant} updatePlant={updatePlant} deletePlant={deletePlant}/>
  })
  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
