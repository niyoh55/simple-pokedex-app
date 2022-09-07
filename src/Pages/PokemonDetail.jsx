import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { checkPokemonType } from "../Utils/PokemonColors";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const capitalizeFirstLetter = (name) => {
    const splitName = name.split("");
    splitName[0] = splitName[0].toUpperCase();
    return splitName.join("");
  };

  const getPokemonDetail = async (pokemonName) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemon({
        ...res.data,
        bg_color: checkPokemonType(res.data.types[0].type.name),
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      navigate("/");
      //getPokemonDetail(params.pokemon_name);
    }
  }, []);

  return (
    <div
      className={`w-full h-screen pt-10 ${
        pokemon
          ? pokemon.bg_color
            ? pokemon.bg_color
            : "bg-white"
          : "bg-white"
      }`}
    >
      {pokemon ? (
        <div className="h-full flex flex-col">
          <div
            className={`${pokemon.bg_color} w-full h-full flex flex-col flex-1 items-center justify-center`}
          >
            <motion.img
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [0, 0.3, 0.5, 0.7, 1],
              }}
              transition={{ duration: 0.5 }}
              className={`w-auto h-full aspect-square max-w-full max-h-full scale-90 duration-1000`}
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`A picture of ${pokemon.name} from Pokemon.`}
            />
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-7xl font-bold tracking-widest"
            >
              {capitalizeFirstLetter(pokemon.name)}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className=" flex-1 px-10 pt-10 flex flex-col gap-y-5"
          >
            {/* <span className="text-3xl tracking-wider font-bold">
              Pokemon Name:{" "}
              <span className="font-normal">
                {capitalizeFirstLetter(pokemon.name)}
              </span>
            </span> */}
            <span className="text-3xl tracking-wider font-bold">
              Pokemon Type: {}
              <span className={`text-black font-normal`}>
                {capitalizeFirstLetter(pokemon.types[0].type.name)}
              </span>
            </span>
          </motion.div>
        </div>
      ) : (
        <h1>NO DATA YET</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
