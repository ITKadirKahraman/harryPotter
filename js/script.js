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

function updateLayout() {
    let categories = Object.keys(images);
    for (let indexImages = 0; indexImages < categories.length; indexImages++) {
        let category = images[categories[indexImages]][0];
        if(categories.length > 3){
            category.classList.add("grindLayout");
        }
    }
}

function openCategory(category) {
    console.log("Kategorie angeklickt:", category);
    if( category === "Characters") {
        loadCharacters();
    } else if ( category === "Students") {
        loadStudents();
    }else if (category === "Staff") {
        loadStaff();
    }
}

async function loadCharacters() {
    const response = await fetch(CHARACTER_URL);
    const characters = await response.json();
    const contentContainer = document.getElementById("contentContainer");
    contentContainer.innerHTML = "";
    for (let index = 0; index < characters.length; index++) {
        contentContainer.innerHTML += getCharacterCard(characters[index]);
    }
}

async function loadStudents() {
    const response = await fetch(STUDENTS_URL);
    const students = await response.json();
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = "";
    for (let index = 0; index < students.length; index++) {
        contentContainer.innerHTML += getStudentsCard(students[index]);
    }
}

async function loadStaff() {
    const response = await fetch(STAFF_URL);
    const staff = await response.json();
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = "";
    for (let index = 0; index < staff.length; index++) {
        contentContainer.innerHTML += getStaffCard(staff[index]);    
    }
}