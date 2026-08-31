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
    for (let indexImages = 0; indexImages < images.length; indexImages++) {
        card.innerHTML += getMain(indexImages);
    }
}

function renderFooter() {
    return document.getElementById('footerContainer').innerHTML = getFooter();
}