const list = document.querySelector('.section-list')
const button = document.querySelector('.button')
let lastPos = 0
const input = document.querySelector('.input')

function displayPokemons(pokemons) {
    document.getElementById("pokemon-list").innerHTML = pokemons.map(p => `
        <div class="pokemon">
            <h2>${p.name}</h2>
            <p>Type: ${p.type}</p>
        </div>
        <div class="list-item">
                <a href="/bulbasaur" class="pokemon">
                    <div class="id">#1</div>
                        <div class="image" style="background-image: url(&quot;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png&quot;);"></div>
                        <h3 class="title">bulbasaur</h3>
                        <div class="labels">
                            <div class="label grass" data-v-996d4743="">grass</div>
                            <div class="label poison" data-v-996d4743="">poison</div>
                        </div>
                    </a>
                </div>
            </div>
    `).join("");
}

function searchPokemon() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = window.pokemons.filter(p => p.name.toLowerCase().includes(searchValue));
    displayPokemons(filtered);
}

button.addEventListener('click', function() {
    handleLoadMore()
})
