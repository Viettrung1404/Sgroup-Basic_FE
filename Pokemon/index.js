const list = document.querySelector('.section-list');
const button = document.querySelector('.button');
const input = document.querySelector('.search');

let lastPosition = 36;
let data = [];

// Hàm hiển thị danh sách Pokémon
function displayPokemons(pokemons) {
    list.innerHTML = pokemons.map(p => `
        <div class="list-item">
            <a href="/${p.name}" class="pokemon">
                <div class="id">#${p.id}</div>
                <div class="image" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png');"></div>
                <h3 class="name">${p.name}</h3>
                <div class="types">
                    ${p.types.map(type => `<div class="type ${type}">${type}</div>`).join("")}
                </div>
            </a>
        </div>
    `).join("");
}

// Hàm tìm kiếm Pokémon
function searchPokemon() {
    const searchValue = input.value.toLowerCase();
    const filtered = data.filter(p => p.name.toLowerCase().includes(searchValue));
    displayPokemons(filtered);
}

// Gọi API lấy danh sách Pokémon
async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
        const result = await response.json();
        
        // Lấy thông tin từng Pokémon (name, id, types)
        data = await Promise.all(result.results.map(async (p, index) => {
            const details = await fetch(p.url).then(res => res.json());
            return {
                id: details.id,
                name: details.name,
                types: details.types.map(t => t.type.name)
            };
        }));

        window.pokemons = data; 
        displayPokemons(data.slice(0, lastPosition)); 
}

fetchPokemons();

input.addEventListener("input", function() {
    const searchValue = input.value.toLowerCase();
    if (searchValue === "") {
        displayPokemons(data.slice(0, lastPosition));
        return;
    }
    const filtered = data.filter(p => p.name.toLowerCase().includes(searchValue));
    displayPokemons(filtered);
    button.style.display = 'none';
});

button.addEventListener('click', function() {
    lastPosition += 36;
    if (lastPosition > data.length) {
        lastPosition = data.length;
        button.style.display = 'none';
    }
    displayPokemons(data.slice(0, lastPosition));
});
