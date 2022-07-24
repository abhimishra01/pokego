import { POKEMON_TYPES } from "utils/constants";
import { colors } from "utils/themes/colors";

const { ELECTRIC, GRASS, WATER, FIRE, NORMAL, ROCK, GHOST } = POKEMON_TYPES;

export const getPokeCardColorByType = (type) => {
  switch (type) {
    case ELECTRIC:
      return colors.electric;
    case GRASS:
      return colors.grass;
    case WATER:
      return colors.water;
    case FIRE:
      return colors.fire;
    case NORMAL:
      return colors.normal;
    case ROCK:
      return colors.rock;
    case GHOST:
      return colors.ghost;
    default:
      return colors.other;
  }
};
