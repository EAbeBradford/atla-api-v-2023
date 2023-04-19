import React, { useEffect, useState } from "react";
import axios from 'axios';
const AirNomads = () => {
  const [Data, setData] = useState({
    name: '',
    affiliation: '',
    allies: [],
    enemies: [],
    photoUrl: '',


  })
  useEffect(() => {
    axios.get('https://last-airbender-api.fly.dev/api/v1/characters?affiliation=Air+Nomads')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Air Nomads Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let airData = res.data[index];
        
        console.log('random fire: ', airData)
        
        setData({ name: airData.name, 
          pioneers: airData.pioneers, 
          affiliation: airData.affiliation, 
          allies: airData.allies, 
          enemies: airData.enemies, 
          photoUrl: airData.photoUrl
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

export default AirNomads;