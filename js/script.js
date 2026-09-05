let allObjects = []; // alle geladene Objekte vom API
let allStudents = []; // alle geladene Studenten vom API
let allStaffs = []; // alle geladene Lehrkräfte vom API
let favoritePerons = []; // die favoriten Persone werden gespeichert

function init() {
    renderPage();
}

async function openCardsCharacters() {
    
}

async function openCardsStudents() {
    
}

async function openCardsStaff() {
    
}

async function openCardsSpells() {
    
}

async function openCardsHouseGryffindor() {
    
}

async function openCardsHouseSlytherin() {
    
}

async function openCardsHouseRavenclaw() {
    
}

async function openCardsHouseHufflepuff() {
    
}

async function loadCards(characters) {
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();

    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    const names = getEvolutionNames(evolutionData.chain);

    const container =
        document.getElementById(`evolutionChain${pokemon.id}`);

    container.innerHTML = "";

    for (const name of names) {

        const response = await fetch(BASE_URL + name);

        const evolutionPokemon = await response.json();

        container.innerHTML += evolutionChain(evolutionPokemon);
    }
}

async function renderDialog() {
    const dialog = document.getElementById('dialog');
    const pokemon = allPokemons[currentIndex];
    dialog.innerHTML = getDialogPokemonCard(pokemon);
    await loadEvolutionChain(pokemon);
}