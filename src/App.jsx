import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkPokemonType } from "../src/Utils/PokemonColors";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
        {
          ...res.data,
          name: capitalizeFirstLetter(res.data.name),
          bg_color: checkPokemonType(res.data.types[0].type.name),
        },
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

  const goToPokemonDetails = (pokemon) => {
    navigate(`/pokemon-detail/${pokemon.name}`, { state: { ...pokemon } });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="h-full min-h-screen w-full bg-white py-2 px-5 flex flex-col justify-center items-center">
      <div className="flex-1 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5  gap-y-5 gap-x-5 w-full">
          {pokemons.map((pokemon, index) => (
            <div
              key={pokemon.id}
              className="flex flex-col justify-between items-center bg-slate-200 shadow-2xl border-2 border-gray-600 px-2 py-2 rounded-2xl aspect-square hover:scale-105 active:scale-95 transition-all duration-200 group font-Silkscreen"
              onClick={() => goToPokemonDetails(pokemon)}
            >
              <div
                className={`${pokemon.bg_color} w-full h-full flex items-center justify-center rounded-2xl`}
              >
                <img
                  className={`w-auto h-full aspect-square max-w-full max-h-full scale-90 ${
                    Number(index) % 2 == 0
                      ? "group-hover:rotate-[15deg]"
                      : "group-hover:-rotate-[15deg]"
                  }
                 duration-1000`}
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`A picture of ${pokemon.name} from Pokemon.`}
                />
              </div>
              <span className="text-2xl font-semibold pt-2">
                {pokemon.name}
              </span>
              <span className="text-md font-normal pb-2">
                {pokemon.types[0].type.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={loadMorePokemons}
        disabled={isLoading}
        className={`${
          isLoading ? "bg-gray-400" : "bg-green-200"
        } px-10 py-2 text-3xl mt-20 rounded-lg w-full flex-none font-Silkscreen`}
      >
        <span>{isLoading ? "Loading..." : "Load More"}</span>
      </button>
    </div>
  );
}

export default App;
