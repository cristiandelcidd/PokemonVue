import { RouteRecordRaw } from "vue-router";

import PokemonLayout from "@/pokemons/layout/PokemonLayout.vue";
import PokemonId from "@/pokemons/pages/PokemonId.vue";
import PokemonList from "@/pokemons/pages/PokemonList.vue";
import PokemonSearch from "@/pokemons/pages/PokemonSearch.vue";

export const pokemonRoute: RouteRecordRaw = {
  path: "/pokemons",
  redirect: "/pokemons/list",
  component: PokemonLayout,
  children: [
    {
      path: "by/id",
      props: { title: "Pokemon by Id", visible: false },
      name: "pokemon-id",
      component: PokemonId,
    },
    {
      path: "list",
      props: { title: "List", visible: true },
      name: "pokemon-list",
      component: PokemonList,
    },
    {
      path: "search",
      props: { title: "Search", visible: true },
      name: "pokemon-search",
      component: PokemonSearch,
    },
  ],
};
