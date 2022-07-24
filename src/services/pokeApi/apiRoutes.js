export const apiRoutes = {
  ALL_POKEMONS: (limit = 0, offset = 0) =>
    `/pokemon?limit=${limit}&offset=${offset}`,
  POKEMON_BY_NAME: (name) => `/pokemon/${name}`,
};
