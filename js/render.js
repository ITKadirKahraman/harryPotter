function renderPage() {
    showLoading();
    renderHeader();
    renderMain();
    renderFooter();
}

function renderHeader() {
    document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderMain() {
    let card = document.getElementById('categoryContainer');
    card.innerHTML = "";
    let categories = Object.keys(images);
    for (let indexImages = 0; indexImages < categories.length; indexImages++) {
        let category = images[categories[indexImages]][0];
        card.innerHTML += getMain(category);
    }
}

function renderFooter() {
    document.getElementById('footerContainer').innerHTML = getFooter();
}