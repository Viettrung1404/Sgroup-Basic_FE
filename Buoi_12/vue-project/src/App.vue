<script setup>
import { ref, onMounted } from 'vue';
import PokemonCard from './components/PokemonCard.vue';

const data = []
const pokemon = ref([]);
const pokemonDetail = ref([]);
const searchInput = ref('');
const lastPosition = ref(36);
const isSearching = ref(false);

async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
  const result = await response.json();
  data.push(...result.results);
  pokemon.value = data.slice(0, lastPosition.value);
  fetchPokemonsDetail(pokemon.value);
}

async function fetchPokemonsDetail(pokemons) {
  pokemonDetail.value = await Promise.all(
    pokemons.map(async pkm => {
      const details = await fetch(pkm.url).then((res) => res.json());
      return {
        id: details.id,
        name: details.name,
        types: details.types.map(t => t.type.name),
        image: details.sprites.front_default
      }
  }));
}

async function loadMore() {
  const bonus = data.slice(lastPosition.value, lastPosition.value + 36);
  const newPokemonDetail = await Promise.all(
    bonus.map(async (pkm) => {
      const details = await fetch(pkm.url).then(res => res.json());
      return {
        id: details.id,
        name: details.name,
        types: details.types.map(t => t.type.name),
        image: details.sprites.front_default
      };
    })
  );
  pokemonDetail.value.push(...newPokemonDetail);
  lastPosition.value += 36;
  if (lastPosition.value > data.length) {
    lastPosition.value = data.length;
  }
}

async function searching() {
  if (!searchInput.value) {
      fetchPokemonsDetail(pokemon.value);
      isSearching.value = false;
      return;
  }
  const searchValue = searchInput.value.toLowerCase();
  const pkm = data.filter((p) => p.name.toLowerCase().includes(searchValue));
  fetchPokemonsDetail(pkm);
  isSearching.value = true;
}

onMounted(() => {
  fetchPokemons();
});

</script>

<template>
<div class="main">
    <div class="section-heading">
        <h2>Pokemon API</h2>
    </div>
    <div class="section-search">
        <input v-model="searchInput" @input="searching" class="search" type="text" placeholder="Search some Pokemon...">
    </div>
    <div class="section-list">
      <!-- <div v-for="(p, index) in pokemonDetail" :key="index" class="list-item">
        <a :href="`/${p.name}`" class="pokemon">
          <div class="id">#{{ p.id }}</div>
          <div class="image" :style="{ backgroundImage: `url(${p.image})` }"></div>
          <h3 class="name">{{ p.name }}</h3>
          <div class="types">
            <div v-for="(type, i) in p.types" :key="i" class="type" :class="type">
              {{ type }}
            </div>
          </div>
        </a>
      </div> -->
      <PokemonCard v-for="(pkm, index) in pokemonDetail":key="index" :data="pkm" />
    </div>
    <div :class="{'section-button': true, 'isHidden': isSearching}">
        <button @click="loadMore" class="button">Load More</button>
    </div>
</div>
</template>

<style scoped>
.main {
    max-width: 1200px;
    margin: 50px auto;
}

.section-heading {
    font-size: 25px;
    margin-bottom: 50px;
    text-align: center;
}

.section-search {
    display: flex;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto 50px;
}

.section-search input {
    font-size: 16px;
    width: 100%;
    padding: 20px;
    box-shadow: #64646f33 0 7px 29px;
    transition: all 0.4s;
    border: 1px solid #00000036;
    border-radius: 30px;
}

.section-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.section-button {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    text-align: center;
}

.section-button.isHidden {
    display: none;
}

.section-button button {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    background-color: #ff4d4f;
    border: none;
    border-radius: 10px;
    padding: 20px 25px;
    transition: all .25s cubic-bezier(0.02,0.01,0.47,1);
}

@media (max-width: 1200px) {
    .section-list .list-item {
        --width: 25%;
    }
}

@media (max-width: 960px) {
    .section-list .list-item {
        --width: 33.33%;
    }
}

@media (max-width: 768px) {
    .section-list .list-item {
        --width: 50%;
    }
}

</style>
