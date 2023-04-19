import React, { useEffect, useState } from "react";
import axios from 'axios';
const EarthKingdom = () => {
  const [Data, setData] = useState({
    name: '',
    affiliation: '',
    allies: [],
    enemies: [],
    photoUrl: '',


  })
  useEffect(() => {
    axios.get('https://last-airbender-api.fly.dev/api/v1/characters?affiliation=Earth+Kingdom')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('earth Kingdom Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let earthData = res.data[index];
        
        console.log('random earth: ', earthData)
        
        setData({ name: earthData.name, 
          pioneers: earthData.pioneers, 
          affiliation: earthData.affiliation, 
          allies: earthData.allies, 
          enemies: earthData.enemies, 
          photoUrl: earthData.photoUrl
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

export default EarthKingdom;