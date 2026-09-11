function showLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 3000);
}

function hideLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}