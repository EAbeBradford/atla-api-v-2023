import React, { useEffect, useState } from "react";
import axios from 'axios';
const FireNation = () => {
  const [Data, setData] = useState({
    name: '',
    affiliation: '',
    allies: [],
    enemies: [],
    photoUrl: '',


  })
  useEffect(() => {
    axios.get('https://last-airbender-api.fly.dev/api/v1/characters?affiliation=Fire+Nation')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('fire Nation Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let fireData = res.data[index];
        
        console.log('random fire: ', fireData)
        
        setData({ name: fireData.name, 
          pioneers: fireData.pioneers, 
          affiliation: fireData.affiliation, 
          allies: fireData.allies, 
          enemies: fireData.enemies, 
          photoUrl: fireData.photoUrl
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

export default FireNation;