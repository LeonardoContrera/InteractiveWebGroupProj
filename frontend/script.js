let url = 'http://localhost:3000/api';
let waterCount = 0;
let fireCount = 0;
let windCount = 0;
let earthCount = 0;

let gen1Count = 0;
let gen2Count = 0;
let gen3Count = 0;
let gen4Count = 0;
let gen5Count = 0;
let gen6Count = 0;
let gen7Count = 0;
let gen8Count = 0;

let pcCount = 0;
let xboxCount = 0;
let playstationCount = 0;
let switchCount = 0;

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.element);
            if(element.element === "Wind")
            {
                windCount++;
            }
            else if(element.element === "Water")
            {
                waterCount++;
            }
            else if(element.element === "Fire")
            {
                fireCount++;
            }
            else if(element.element === "Earth")
            {
                earthCount++;
            }
        });
        data.forEach(element => {
            console.log(element.pokemongen);
        });
        data.forEach(element => {
            console.log(element.systemtoplay);
        });
        console.log("Wind:" + windCount)
        console.log("Water:" + waterCount)
        console.log("Fire:" + fireCount)
        console.log("Earth:" + earthCount)
    });