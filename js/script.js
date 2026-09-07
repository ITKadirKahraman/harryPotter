let allObjects = []; // alle geladene Objekte vom API
let allStudents = []; // alle geladene Studenten vom API
let allStaffs = []; // alle geladene Lehrkräfte vom API
let favoritePerons = []; // die favoriten Persone werden gespeichert

function init() {
    renderPage();
}

async function openCardsCharacters(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsCharacters(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsStudents(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsStudents(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsStaff(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsStaff(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsSpells(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsSpells(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsHouseGryffindor(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsHouseGryffindor(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsHouseSlytherin(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsHouseSlytherin(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsHouseRavenclaw(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsHouseRavenclaw(characters);
    dialog.showModal();
    await loadCards(characters);
}

async function openCardsHouseHufflepuff(characters) {
    showLoading();
    const dialog = document.getElementById('selectCards');
    dialog.innerHTML = getDialogWithSmallCardsHouseHufflepuff(characters);
    dialog.showModal();
    await loadCardsHufflepuff(characters);
}

async function loadCardsHufflepuff(characters) {
    const hufflepuff = await fetch(characters.house.hufflepuff);
    const huffleCard = await hufflepuff.json();
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