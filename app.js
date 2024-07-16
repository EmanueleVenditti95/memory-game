//DATA
const app = document.getElementById('app');
const images = [
    {
        nome : "alien",
        link : "./images/alien.png"
    },
    {
        nome : "bug",
        link : "./images/bug.png"
    },
    {
        nome : "rocket",
        link : "./images/rocket.png"
    },
    {
        nome : "spaceship",
        link : "./images/spaceship.png"
    },
    {
        nome : "duck",
        link : "./images/duck.png"
    },
    {
        nome : "tiktac",
        link : "./images/tiktac.png"
    }
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
    for(let i=0; i<array.length; i++) {
        let src = array[i].link;

        let div = document.createElement("div");
        div.classList.add('hidden','card');

        let img = document.createElement("img");
        img.src = src;

        div.appendChild(img);

        div.addEventListener("click",function () {
            console.log(div);
            div.classList.toggle('hidden');
        });
        app.append(div);
    }  
}




