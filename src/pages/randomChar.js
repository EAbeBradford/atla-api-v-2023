import React, { useEffect, useState } from "react";
import axios from 'axios';


function RandomChar() {


    const [Data, setData] = useState({
        name: '',
        photoUrl: '',
        affiliation: '',
        allies: [],
        enemies:[], 
        position: ''
    })
    useEffect(() => {
        axios.get('https://last-airbender-api.fly.dev/api/v1/characters/random', )
            .then(res => {
              //  res.header("Access-Control-Allow-Origin", "true");
                console.log('Response from main API: ', res)
                console.log('Home Data: ', res.data[0])
                let randomCharData = res.data[0];
                setData({ name: randomCharData.name, photoUrl: randomCharData.photoUrl, affiliation: randomCharData.affiliation, allies: randomCharData.allies,  enemies: randomCharData.enemies, position: randomCharData.position})
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (

        <div>
            <h1> Name: {Data.name}</h1>
            <h1> affiliation: {Data.affiliation}</h1>
            <h1> allies: {Data.allies}</h1>
            <h1> enemies: {Data.enemies}</h1>
            <h1> position: {Data.position}</h1>

            <img src={Data.photoUrl} alt={Data.name} />

        </div>
    );
}

export default RandomChar;