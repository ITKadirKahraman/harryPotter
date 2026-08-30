function renderPage() {
    renderHeader();
    renderMain();
    renderFooter();
}

function renderHeader() {
    return document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderMain() {
    return document.getElementById('mainContainer').innerHTML = getMain();
}

function renderFooter() {
    return document.getElementById('footerContainer').innerHTML = getFooter();
}