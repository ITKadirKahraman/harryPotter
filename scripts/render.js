function renderPage() {
    renderHeader();
    renderFooter();
}

function renderHeader() {
    return document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderFooter() {
    return document.getElementById('footerContainer').innerHTML = getFooter();
}