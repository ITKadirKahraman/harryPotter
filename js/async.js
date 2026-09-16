async function loadCharacters() {
    showLoading();
    try {
        const response = await fetch(CHARACTER_URL);
        const characters = await response.json();
        const contentContainer = document.getElementById("contentContainer");
        contentContainer.innerHTML = "";
        for (let index = 0; index < characters.length; index++) {
            contentContainer.innerHTML += getCharacterCard(characters[index]);
        }
    } catch (error) {
        errorException(error);
    } finally {
        hideLoading();
    }
}

async function loadStudents() {
    showLoading();
    try {
        const response = await fetch(STUDENTS_URL);
        const students = await response.json();
        const contentContainer = document.getElementById('contentContainer');
        contentContainer.innerHTML = "";
        for (let index = 0; index < students.length; index++) {
            contentContainer.innerHTML += getStudentsCard(students[index]);
        }
    }catch(error) {
        errorException(error);
    }finally {
        hideLoading();
    }
}

async function loadStaff() {
    showLoading();
    try {
        const response = await fetch(STAFF_URL);
        const staff = await response.json();
        const contentContainer = document.getElementById('contentContainer');
        contentContainer.innerHTML = "";
        for (let index = 0; index < staff.length; index++) {
            contentContainer.innerHTML += getStaffCard(staff[index]);    
        }
    } catch (error) {
        errorException(error);
    }finally {
        hideLoading();
    }
}

async function loadSpells() {
    showLoading();
    try {
        const response = await fetch(SPELLS_URL);
        const spells = await response.json();
        const contentContainer = document.getElementById('contentContainer');
        contentContainer.innerHTML = "";
        for (let index = 0; index < spells.length; index++) {
            contentContainer.innerHTML += getSpellsCard(spells[index]);
        }
    } catch (error) {
        errorException(error);
    } finally {
        hideLoading();
    }
}

async function loadHouseGryffindor() {
    showLoading();
    try {
        const response = await fetch(GRYFFINDOR_URL);
        const gryffin = await response.json();
        const house = document.getElementById('house');
        house.innerHTML = "";
        for (let index = 0; index < gryffin.length; index++) {
            house.innerHTML += getHouseGryffindor(gryffin[index]);
        }
    } catch (error) {
        errorException(error);
    } finally {
        hideLoading();
    }
}

async function loadHouseSlytherin() {
    showLoading();
    try {
        const response = await fetch(SLYTHERIN_URL);
        const slytherin = await response.json();
        const house = document.getElementById('house');
        house.innerHTML = "";
        for (let index = 0; index < slytherin.length; index++) {
            house.innerHTML += getHouseSlytherin(slytherin[index]);
        } 
    } catch (error) {
        errorException(error);
    } finally {
        hideLoading();
    }
}

async function loadHouseRavenclaw() {
    showLoading();
    try {
        const response = await fetch(RAVENCLAW_URL);
        const ravenclaw = await response.json();
        const house = document.getElementById('house');
        house.innerHTML = "";
        for (let index = 0; index < ravenclaw.length; index++) {
            house.innerHTML += getHouseRavenclaw(ravenclaw[index]);
        }
    } catch (error) {
        errorException(error);
    } finally {
        hideLoading();
    }
}

async function loadHouseHufflepuff() {
    showLoading()
    try {
        const response = await fetch(HUFFLEPUFF_URL);
        const hufflepuff = await response.json();
        const house = document.getElementById('house');
        house.innerHTML = "";
        for (let index = 0; index < hufflepuff.length; index++) {
            house.innerHTML += getHouseHufflepuff(hufflepuff[index]);
        }
    }catch(error) {
        errorException(error);
    }finally {
        hideLoading();
    }
}