<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute();
const pokemonId = route.params.id;
const pokemon = ref(null);

async function fetchPokemonDetail() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
        pokemon.value = null
        return
    }
    const details = await response.json();

    // Fetch species
    const speciesRes = await fetch(`${details.species.url}`);
    const speciesData = await speciesRes.json();
    console.log(speciesData);
    // Fetch evolution chain
    const evolutionRes = await fetch(`${speciesData.evolution_chain.url}`);
    const evolutionData = await evolutionRes.json();
    console.log(evolutionData);
    // Push evolution chain
    let current = evolutionData.chain;
    details.evolution = [];
    while (current) {
        const pokemonName = current.species.name;
        // Gọi API để lấy ảnh
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        const pokemonData = await pokemonResponse.json();
        const pokemonImage = pokemonData.sprites.front_default;
        details.evolution.push({
            name: pokemonName,
            image: pokemonImage
        });
        current = current.evolves_to.length > 0 ? current.evolves_to[0] : null;
    }

    pokemon.value = {
        id: details.id,
        name: details.name,
        types: details.types.map(t => t.type.name),
        image: details.sprites.front_default,
        height: details.height,
        weight: details.weight,
        abilities: details.abilities.map(a => a.ability.name),
        evolution: details.evolution,
        stats: details.stats.map(s => ({
            name: s.stat.name,
            base: s.base_stat
        })),
        entry: speciesData.flavor_text_entries[0].flavor_text
    };
    console.log(pokemon.value);
}

onMounted(() => {
  fetchPokemonDetail()
})
</script>

<template>
    
    <RouterLink class="back" to="/">< Back</RouterLink>
    <div v-if="pokemon" class="pokemon_detail">
        <div class="image" :style="{ backgroundImage: `url(${pokemon.image})` }"></div>
        <div class="types">
            <div v-for="(type, i) in pokemon.types" :key="i" class="type" :class="type">
            {{ type }}
            </div>
        </div>
        <h2 class="name">{{ pokemon.name }}</h2>
        <p class="entry">{{ pokemon.entry }}</p>
        <div class="detail">
            <div class="height">
                <h3>Height</h3>
                <div>{{ pokemon.height }}</div>
            </div>
            <div class="weight">
                <h3>Weight</h3>
                <div>{{ pokemon.weight }}</div>
            </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
            <div v-for="(ability, i) in pokemon.abilities" :key="i" class="ability">{{ ability }}</div>
        </div>
        <h3>Stats</h3>
        <div class="stats">
            <div class="stat">
                <div class="stat_name hp">HP</div>
                <div class="base">{{ pokemon.stats[0].base }}</div>
            </div>
            <div class="stat">
                <div class="stat_name atk">ATK</div>
                <div class="base">{{ pokemon.stats[1].base }}</div>
            </div>
            <div class="stat">
                <div class="stat_name def">DEF</div>
                <div class="base">{{ pokemon.stats[2].base }}</div>
            </div>
            <div class="stat">
                <div class="stat_name spa">SPA</div>
                <div class="base">{{ pokemon.stats[3].base }}</div>
            </div>
            <div class="stat">
                <div class="stat_name spd">SPD</div>
                <div class="base">{{ pokemon.stats[4].base }}</div>
            </div>
            <div class="stat">
                <div class="stat_name spe">SPE</div>
                <div class="base">{{ pokemon.stats[5].base }}</div>
            </div>
        </div>
        <div class="evolution">
            <h3>Evolution</h3>
            <div class="evolution_chain">
                <div class="evo">
                    <h4 class="name">{{ pokemon.evolution[0].name }}</h4>
                    <img :src="pokemon.evolution[0].image" :alt="pokemon.evolution[0].name">
                </div>
                <div v-if="pokemon.evolution.length > 1" class="divine">></div>
                <div v-if="pokemon.evolution.length > 1" class="evo">
                    <h4 class="name">{{ pokemon.evolution[1].name }}</h4>
                    <img :src="pokemon.evolution[1].image" :alt="pokemon.evolution[1].name">
                </div>
                <div v-if="pokemon.evolution.length > 2" class="divine">></div>
                <div v-if="pokemon.evolution.length > 2" class="evo">
                    <h4 class="name">{{ pokemon.evolution[2].name }}</h4>
                    <img :src="pokemon.evolution[2].image" :alt="pokemon.evolution[2].name">
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
h3 {
    width: 100%;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
}

.back {
    display: block;
    padding: 5px 10px;
    border-radius: 30px;
    position: fixed;
    top: 5%;
    left: 5%;
    box-shadow: #63636333 0 4px 8px;;
}

.pokemon_detail {
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    width: 100%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;
}

.image {
    width: 200px;
    height: 200px;
    margin: auto;
    background-size: cover;
}

.types {
    display: flex;
    justify-content: center;
    width: 100%;
}

.type {
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
    padding: 3px 4px;
    border-radius: 5px;
    box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px;
    margin: 0 3px;
    font-size: 13px;
    text-transform: capitalize;
}

.name {
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
}

.entry {
    width: 100%;
    margin-bottom: 10px;
}

.detail {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
    width: 100%;
}

.detail h3 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
}

.detail > div > div{
    text-align: center;
    text-transform: capitalize;
    width: 100px;
    margin: 5px;
    padding: 2px;
    border-radius: 30px;
    background-color: #f6f8fc;
}

.abilities {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
}

.ability {
    text-align: center;
    text-transform: capitalize;
    width: 100px;
    margin: 5px;
    padding: 2px;
    border-radius: 30px;
    background-color: #f6f8fc;
}

.stats {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
    width: 100%;
}

.stat {
    margin: 5px;
    padding: 5px;
    background-color: #f6f8fc;
    border-radius: 30px;
    box-shadow: #63636333 0 2px 8px;
}

.stat_name {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    border-radius: 50%;
}

.base {
    text-align: center;
    margin-bottom: 5px;
}

.evolution {
    width: 100%;
}

.evolution_chain {
    display: flex;
    justify-content: center;
}

.evo {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.evo .name {
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
}

.divine {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
    margin-right: 10px;
}

.hp {
    background-color: #df2140
}

.atk {
    background-color: #ff994d
}

.def {
    background-color: #eecd3d
}

.spa {
    background-color: #85ddff
}

.spd {
    background-color: #96da83
}

.spe {
    background-color: #fb94a8
}

</style>
