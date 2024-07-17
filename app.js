//DATA
const app = document.getElementById('app');
const images = [
    {
        name : "alien",
        link : "./images/alien.png"
    },
    {
        name : "bug",
        link : "./images/bug.png"
    },
    {
        name : "rocket",
        link : "./images/rocket.png"
    },
    {
        name : "spaceship",
        link : "./images/spaceship.png"
    },
    {
        name : "duck",
        link : "./images/duck.png"
    },
    {
        name : "tiktac",
        link : "./images/tiktac.png"
    }
]
let tempArr = [];



//APP
startGame(shuffle(doubleArray(images)));


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
        const indexTo = Math.floor(Math.random() * array.length);
        [array[i], array[indexTo]] = [array[indexTo], array[i]];
    }
    return array;
}

function startGame(array) {
    for(let i=0; i<array.length; i++) {
        let src = array[i].link;

        let div = document.createElement("div");
        div.classList.add('hidden','card');

        let img = document.createElement("img");
        img.src = src;

        div.appendChild(img);

        div.addEventListener("click", () => select(array[i], div));

        app.append(div);
    }  
}


function select(image, element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        tempArr.push({ img: image, el: element });
        console.log(image.name);
        
        if (tempArr.length === 2) {
            console.log(tempArr);
            checkMatch();
        }
    }
}

function checkMatch() {
    if (tempArr[0].img.name === tempArr[1].img.name) {
        console.log('bravoh!');
        tempArr = [];
    } else {
        setTimeout(() => {
            console.log( tempArr);
            tempArr[0].el.classList.toggle('hidden');
            tempArr[1].el.classList.toggle('hidden');
            tempArr = [];
        }, 500);
        console.log('sbagliato');
    }
    
}

