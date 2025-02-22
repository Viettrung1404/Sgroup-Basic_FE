<script setup>

const p = defineProps(['data']);

</script>

<template>

<div class="list-item">
    <a :href="`/${p.data.name}`" class="pokemon">
        <div class="id">#{{ p.data.id }}</div>
        <div class="image" :style="{ backgroundImage: `url(${p.data.image})` }"></div>
        <h3 class="name">{{ p.data.name }}</h3>
        <div class="types">
            <div v-for="(type, i) in p.data.types" :key="i" class="type" :class="type">
            {{ type }}
            </div>
        </div>
    </a>
</div>

</template>

<style scoped>
.section-list .list-item {
    display: flex;
    flex-direction: column;
    max-width: calc(var(--width) - 10px);
    flex-basis: calc(var(--width) - 10px);
    margin: 0 calc(10px / 2);
    margin-bottom: 10px;
    border-radius: 15px;
    box-shadow: #0000001a 0 4px 12px;
    transition: box-shadow 0.4s ease-out;
    --width: 16.66%;
}

.list-item:hover {
    box-shadow: 0 5px 11px #0000002e, 0 4px 15px #00000026;
}

.list-item .pokemon {
    cursor: pointer;
    display: block;
    padding: 10px 5px;
    transition: .4s;
}

.pokemon .id {
    text-align: center;
    color: #2c3e50;
}

.pokemon .name {
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
}

.pokemon .image {
    padding-top: 100%;
    background-size: contain;
}

.pokemon .types {
    display: flex;
    justify-content: center;
}

.pokemon .types .type {
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px;
}
</style>