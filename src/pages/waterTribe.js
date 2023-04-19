import React, { useEffect, useState } from "react";
import axios from 'axios';
const WaterTribe = () => {
  const [Data, setData] = useState({
    name: '',
    affiliation: '',
    allies: [],
    enemies: [],
    photoUrl: '',


  })
  useEffect(() => {
    axios.get('https://last-airbender-api.fly.dev/api/v1/characters?affiliation=Water+Tribe')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('water tribe Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let waterData = res.data[index];
        
        console.log('random water: ', waterData)
        
        setData({ name: waterData.name, 
          pioneers: waterData.pioneers, 
          affiliation: waterData.affiliation, 
          allies: waterData.allies, 
          enemies: waterData.enemies, 
          photoUrl: waterData.photoUrl
         })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
 
  return (

    <div>
      <h1> Name: {Data.name}</h1>
      <h1> Affiliation: {Data.affiliation}</h1>
      <h1> Allies: {Data.allies}</h1>
      <h1> Enemies: {Data.enemies}</h1>
      <img src={Data.photoUrl} alt={Data.name} />

      

    </div>
  );
};

export default WaterTribe;