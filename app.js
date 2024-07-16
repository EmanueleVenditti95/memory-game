//DATA
const app = document.getElementById('app');
const images = [
    "./images/alien.png",
    "./images/bug.png",
    "./images/duck.png",
    "./images/rocket.png",
    "./images/spaceship.png",
    "./images/tiktac.png"
]

//APP
populateGrid(shuffle(doubleArray(images)));



//FUNCTIONS
function doubleArray(array) {
    const doubledArray = [];
    for(let i=0; i<array.length; i++) {
        doubledArray.push(array[i]);
        doubledArray.push(array[i]);
    }
    return doubledArray;
}

function shuffle(array) {
    for(i = 0; i < array.length; i++) {
        const indexFrom = i;
        const indexTo = Math.floor(Math.random() * array.length);
        [array[indexFrom], array[indexTo]] = [array[indexTo], array[indexFrom]];
    }
    return array;
}

function populateGrid(array) {
    for(i=0; i<array.length; i++) {
        let src = array[i];
        let img = document.createElement("img");
        img.src = src;
        app.append(img);
    }  

}



