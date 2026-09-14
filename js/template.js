/*  HEADER  */

function getHeader() {
    return `
        <div class="headerLeft">
            <img class="headerLogo" src="./assets/svg/broom.svg" alt="Besen">
            <h3><span class="spanHeader">Harry Potter</span> World</h3>
        </div>
        <div class="headerRight">
            <input type="text" id="harryInput" placeholder="Search..." onkeydown="">
            <button class="searchHarry" onclick="searchHarry()"><img class="lopu" src="./assets/svg/lopu.svg" alt="Lopu"></button>
            <select id="typeFilter">
                <option value="all">all Categories</option>
                <option value="characters">Characters</option>
                <option value="students">Students</option>
                <option value="staff">Staff</option>
                <option value="house">House</option>
                <option value="spells">Spells</option>
            </select>
        </div>
    `;
}

/*  MAIN  */

function getMain(category) {
    return `
        <button class="cardBtn" onclick="openCategory('${category.name}')">
            <div class="cards">
                <h4 class="cardHeader">${category.name}</h4>
                <img src="./assets/svg/${category.images}.svg" alt="${category.name} Images">
            </div>
        </button>
    `;
}

/*  CARDS  */

function getCharacterCard(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
            <div class="cardsBottom">
                <h4>${characters.house}</h4>
            </div>
        </li>
    `;
}

function getStudentsCard(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
            <div class="cardsBottom">
                <h4>${characters.house}</h4>
            </div>
        </li>
    `;
}

function getStaffCard(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
            <div class="cardsBottom">
                <h4>${characters.house}</h4>
            </div>
        </li>
    `;
}

function getSpellsCard(spells) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${spells.name}</h3>
            </div>
            <div class="cardsMiddle">
                <h4>Beschreibung</h4>
                <p>${spells.description}</p>
            </div>
        </li>
    `;
}

function getHouseCards(house) {
    return `
        <button class="cardBtn" onclick="openHouse('${house.name}')">
            <div class="cards">
                <h4 class="cardHeader">${house.name}</h4>
                <img src="./assets/svg/${house.images}.svg" alt="${house.name} Images">
            </div>
        </button>
    `;
}

function getHouseGryffindor(characters) {
    return `
        <li>
            <div class="cardsHeader" onclick="loadHouse()">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
        </li>
    `;
}

function getHouseSlytherin(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
        </li>
    `;
}

function getHouseRavenclaw(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
        </li>
    `;
}

function getHouseHufflepuff(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.image}" alt="${characters.name} Image"> 
            </div>
        </li>
    `;
}

/*  FOOTER  */

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="footerLogo" src="./assets/svg/hedwig.svg" alt="Hedwig Icon">
    `;
}