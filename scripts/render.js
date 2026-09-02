function renderPage() {
    renderHeader();
    renderMain();
    renderFooter();
}

function renderHeader() {
    return document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderMain() {
    let card = document.getElementById('mainContainer');
    card.innerHTML = "";
    let categories = Object.keys(images);
    for (let indexImages = 0; indexImages < categories.length; indexImages++) {
        let category = images[categories[indexImages]][0];
        card.innerHTML += getMain(category);
    }
}

function renderFooter() {
    return document.getElementById('footerContainer').innerHTML = getFooter();
}