function saveToLocalStorage() {
    localStorage.setItem("favoritePerson", JSON.stringify(favoritePerons));
}

function getFromLocalStorage() {
    const getData = localStorage.getItem("favoritePerons");
    if(getData) {
        favoritePerons = JSON.parse(getData)
    }
}

function saveFavorite(personID) {

    const person = allObjects.find(
        person => person.id === personID
    );

    const favorite = {
        name: person.name,
        house: person.house,
        image: person.image
    };

    favoritePerons.push(favorite);

    saveToLocalStorage();
}