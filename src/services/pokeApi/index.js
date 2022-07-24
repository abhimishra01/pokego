import { create } from "apisauce";

import { apiRoutes } from "./apiRoutes";

const apiClient = create({
  baseURL: process.env.REACT_APP_API_URL,
});

const { ALL_POKEMONS, POKEMON_BY_NAME } = apiRoutes;

export const getAllPokemons = async (limit, offset) =>
  await apiClient.get(ALL_POKEMONS(limit, offset));

export const fetchPokemonsByName = async (name) =>
  await apiClient.get(POKEMON_BY_NAME(name));
