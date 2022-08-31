import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const capitalizeFirstLetter = (name) => {
    const splitName = name.split("");
    splitName[0] = splitName[0].toUpperCase();
    return splitName.join("");
  };

  const getPokemonDetail = async (pokemonName) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemons((state) => [
        ...state,
        { ...res.data, name: capitalizeFirstLetter(res.data.name) },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const getPokemons = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );

    //setPokemons([...res.data.results]);

    res.data.results.forEach((pokemon) => {
      getPokemonDetail(pokemon.name);
    });
  };

  const loadMorePokemons = async () => {
    setOffset((state) => state + 20);
    console.log(offset);
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset + 20}`
      );

      res.data.results.forEach((pokemon) => {
        getPokemonDetail(pokemon.name);
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="h-full min-h-screen w-full bg-white py-2 px-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 gap-y-5 gap-x-5 w-full">
        {pokemons.map((pokemon, index) => (
          <div
            key={pokemon.id}
            className="flex flex-col justify-between items-center bg-slate-200 shadow-2xl border-2 border-gray-600 px-2 py-2 rounded-2xl aspect-square hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <div className="bg-pink-300 w-full h-full flex items-center justify-center">
              <img
                className={`w-auto h-full aspect-square max-w-full max-h-full scale-90 ${
                  Number(index) % 2 == 0
                    ? "group-hover:rotate-[15deg]"
                    : "group-hover:-rotate-[15deg]"
                }
                 duration-1000`}
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </div>
            <span className="text-2xl font-semibold pt-2">{pokemon.name}</span>
            <span className="text-md font-normal pb-2">
              {pokemon.types[0].type.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={loadMorePokemons}
        className="bg-green-200 px-10 py-2 text-3xl mt-20 rounded-lg w-full"
      >
        <span>{isLoading ? "Loading..." : "Load More"}</span>
      </button>
    </div>
  );
}

export default App;
