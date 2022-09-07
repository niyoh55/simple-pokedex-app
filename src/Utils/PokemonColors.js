export const checkPokemonType = (type) => {
  switch (type) {
    case "water":
      return "bg-water";
    case "electric":
      return "bg-electric";
    case "grass":
      return "bg-grass";
    case "ice":
      return "bg-ice";
    case "fighting":
      return "bg-fighting";
    case "poison":
      return "bg-poison";
    case "ground":
      return "bg-ground";
    case "flying":
      return "bg-flying";
    case "psychic":
      return "bg-psychic";
    case "bug":
      return "bg-bug";
    case "rock":
      return "bg-rock";
    case "ghost":
      return "bg-ghost";
    case "dragon":
      return "bg-dragon";
    case "dark":
      return "bg-dark";
    case "steel":
      return "bg-steel";
    case "fairy":
      return "bg-fairy";
    case "normal":
      return "bg-normal";
    case "fire":
      return "bg-fire";
    default:
      return "bg-normal";
  }
};

export const qq = (type) => {
  console.log(type);
  switch (type) {
    case "water":
      return "text-water";
    case "electric":
      return "text-electric";
    case "grass":
      return "text-grass";
    case "ice":
      return "text-ice";
    case "fighting":
      return "text-fighting";
    case "poison":
      return "text-poison";
    case "ground":
      return "text-ground";
    case "flying":
      return "text-flying";
    case "psychic":
      return "text-psychic";
    case "bug":
      return "text-bug";
    case "rock":
      return "text-rock";
    case "ghost":
      return "text-ghost";
    case "dragon":
      return "text-dragon";
    case "dark":
      return "text-dark";
    case "steel":
      return "text-steel";
    case "fairy":
      return "text-fairy";
    case "normal":
      return "text-normal";
    case "fire":
      return "text-fire";
    default:
      return "text-normal";
  }
};
