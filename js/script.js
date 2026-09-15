let allObjects = []; // alle geladene Objekte vom API
let allStudents = []; // alle geladene Studenten vom API
let allStaffs = []; // alle geladene Lehrkräfte vom API
let favoritePerons = []; // die favoriten Persone werden gespeichert

function init() {
    renderPage();
}

function updateLayout() {
    let categories = Object.keys(images);
    for (let indexImages = 0; indexImages < categories.length; indexImages++) {
        let category = images[categories[indexImages]][0];
        if(categories.length > 4){
           category = document.getElementById('contentContainer');
        }
    }
}

function openCategory(category) {
    console.log("Kategorie angeklickt:", category);
    if( category === "Characters") {
        showLoading();
        deleteHouseContainer();
        deleteHouse();
        loadCharacters();
    } else if ( category === "Students") {
        showLoading();
        deleteHouseContainer();
        deleteHouse();
        loadStudents();
    }else if (category === "Staff") {
        showLoading();
        deleteHouseContainer();
        deleteHouse();
        loadStaff();
    }else if(category === "Spells") {
        showLoading();
        deleteHouseContainer();
        deleteHouse();
        loadSpells();
    }else if(category === "House") {
        deleteContentContainer();
        loadHouseContainer();
    }
}

function deleteContentContainer() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = "";
}

function deleteHouseContainer() {
    const houseContainer = document.getElementById('houseContainer');
    houseContainer.innerHTML = "";
}

function deleteHouse() {
    const house = document.getElementById('house');
    house.innerHTML = "";
}

function loadHouseContainer() {
    deleteContentContainer();
    let card = document.getElementById('houseContainer');
    card.innerHTML = "";
    let houses = Object.keys(house);
    for (let indexImages = 0; indexImages < houses.length; indexImages++) {
        let hou = house[houses[indexImages]][0];
        card.innerHTML += getHouseCards(hou);
    }
}

function openHouse(houseName) {
    if (houseName === "Gryffindor") {
        showLoading();
        loadHouseGryffindor();
    }else if(houseName === "Hufflepuff") {
        showLoading();
        loadHouseHufflepuff();
    }else if(houseName === "Ravenclaw") {
        showLoading();
        loadHouseRavenclaw();
    }else if(houseName === "Slytherin") {
        showLoading();
        loadHouseSlytherin();
    }
}

function loadHouse() {
    let house = document.getElementById('house');
    house.innerHTML = "";
    const houses = Object.keys(house);
    for (let index = 0; index < houses.length; index++) {
        const houseName = houses[index];
        const houseData = house[houseName[0]];
        house.innerHTML += getHouseCards(houseData);
    }
}