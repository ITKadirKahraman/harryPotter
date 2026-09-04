/*  HEADER  */

function getHeader() {
    return `
        <div class="headerLeft">
            <img class="headerLogo" src="./assets/svg/broom.svg" alt="Besen">
            <h3><span class="spanHeader">Harry Potter</span> World</h3>
        </div>
        <div class="headerRight">
            <input type="text" id="harryInput" placeholder="Search..." onkeydown="">
            <button class="searchHarry" onlcick="searchHarry()"><img class="lopu" src="./assets/svg/lopu.svg" alt="Lopu"></button>
            <select id="typeFilter" onchange="filterTypeKategorie()">
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
        <button class="cardBtn">
            <div class="cards">
                <h4 class="cardHeader">${category.name}</h4>
                <img src="./assets/svg/${category.images}.svg" alt="${category.name} Images">
            </div>
        </button>
    `;
}

/*  CARDS  */

function getDialogWithSmallCardsCharacters(characters) {
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

function getDialogWithSmallCardsStudents(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.students.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.students.image}" alt="${characters.students.name} Image"> 
            </div>
            <div class="cardsBottom">
                <h4>${characters.students.house}</h4>
            </div>
        </li>
    `;
}

function getDialogWithSmallCardsStaff(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.staff.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.staff.image}" alt="${characters.staff.name} Image"> 
            </div>
            <div class="cardsBottom">
                <h4>${characters.staff.house}</h4>
            </div>
        </li>
    `;
}

function getDialogWithSmallCardsSpells(spells) {
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

function getDialogWithSmallCardsHouseGryffindor(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.house.gryffindor.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.house.image}" alt="${characters.staff.name} Image"> 
            </div>
        </li>
    `;
}

function getDialogWithSmallCardsHouseSlytherin(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.house.slytherin.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.house.slytherin.image}" alt="${characters.staff.slytherin.name} Image"> 
            </div>
        </li>
    `;
}

function getDialogWithSmallCardsHouseRavenclaw(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.house.ravenclaw.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.house.ravenclaw.image}" alt="${characters.staff.ravenclaw.name} Image"> 
            </div>
        </li>
    `;
}

function getDialogWithSmallCardsHouseHufflepuff(characters) {
    return `
        <li>
            <div class="cardsHeader">
                <h3>${characters.house.hufflepuff.name}</h3>
            </div>
            <div class="cardsMiddle">
                <img class="smallCardsImage" src="${characters.house.hufflepuff.image}" alt="${characters.staff.hufflepuff.name} Image"> 
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