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

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="footerLogo" src="./assets/svg/harry.svg" alt="Harry Potter Icon">
    `;
}