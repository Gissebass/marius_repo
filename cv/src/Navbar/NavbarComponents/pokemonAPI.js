import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from 'pokemon-images';

const PokemonAPI = () => {
  const [image, setImage] = useState();
  var SquirtleImg = Pokemon.getSprite('squirtle');
  console.log(SquirtleImg);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      )
      .then((response) => {
        setImage(response);
        return image
      }).then((data) => {
          setImage(data)
      })
  }, []);

  return <><img src={SquirtleImg}/></>
};

export default PokemonAPI;
