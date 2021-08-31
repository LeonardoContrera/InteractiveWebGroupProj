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
            if(element.pokemongen === "Gen1")
            {
                gen1Count++;
            }
            else if(element.pokemongen === "Gen2")
            {
                gen2Count++;
            }
            else if(element.pokemongen === "Gen3")
            {
                gen3Count++;
            }
            else if(element.pokemongen === "Gen4")
            {
                gen4Count++;
            }
            else if(element.pokemongen === "Gen5")
            {
                gen5Count++;
            }
            else if(element.pokemongen === "Gen6")
            {
                gen6Count++;
            }
            else if(element.pokemongen === "Gen7")
            {
                gen7Count++;
            }
            else if(element.pokemongen === "Gen2")
            {
                gen8Count++;
            }
        });
        data.forEach(element => {
            if(element.systemtoplay === "PC")
            {
                pcCount++;
            }
            else if(element.systemtoplay === "Playstation")
            {
                playstationCount++;
            }
            else if(element.systemtoplay === "Xbox")
            {
                xboxCount++;
            }
            else if(element.systemtoplay === "Switch")
            {
                switchCount++;
            }
        });
        console.log("Wind:" + windCount);
        console.log("Water:" + waterCount);
        console.log("Fire:" + fireCount);
        console.log("Earth:" + earthCount);
        console.log("Gen1:" + gen1Count);
        console.log("Gen2:" + gen2Count);
        console.log("Gen3:" + gen3Count);
        console.log("Gen4:" + gen4Count);
        console.log("Gen5:" + gen5Count);
        console.log("Gen6:" + gen6Count);
        console.log("Gen7:" + gen7Count);
        console.log("Gen8:" + gen8Count);
        console.log("PC:" + pcCount);
        console.log("Playstation:" + playstationCount);
        console.log("Xbox:" + xboxCount);
        console.log("Switch:" + switchCount);

        const canvas = document.getElementById('demo');
const ctx = canvas.getContext('2d');
    
// canvas size
canvas.width=800;
canvas.height=700;

// graph outlines
ctx.strokeStyle = '#FFFFFF';
ctx.beginPath();
ctx.moveTo(100, 75);
ctx.lineTo(100, 400);
ctx.lineTo(625, 400);
ctx.stroke();

// elements key
ctx.strokeStyle = '#FFFFFF';
ctx.strokeRect(25, 500, 150, 150);
ctx.fillStyle = '#FFFF00';
ctx.font = '20px Arial';
ctx.fillText('Elements', 55, 525);
ctx.moveTo(25, 535);
ctx.lineTo(175, 535);
ctx.stroke();
// fire
ctx.fillStyle = '#FF0000';
ctx.fillRect(40, 550, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Fire', 60, 560);
// water
ctx.fillStyle = '#0000FF';
ctx.fillRect(40, 575, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Water', 60, 585);
//earth
ctx.fillStyle = '#008000';
ctx.fillRect(40, 600, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Earth', 60, 610);
//wind
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(40, 625, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Wind', 60, 635);

// pokemongen key
ctx.strokeStyle = '#FFFFFF';
ctx.strokeRect(200, 500, 400, 150);
ctx.fillStyle = '#FFFF00';
ctx.font = '20px Arial';
ctx.fillText('Pokemon Generation', 300, 525);
ctx.moveTo(200, 535);
ctx.lineTo(600, 535);
ctx.stroke();
// Gen 1 (Kanto)
ctx.fillStyle = '#FF0000';
ctx.fillRect(215, 550, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 1 (Kanto)', 235, 560);
// Gen 2 (Johto)
ctx.fillStyle = '#0000FF';
ctx.fillRect(215, 575, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 2 (Johnto)', 235, 585);
// Gen 3 (Hoenn)
ctx.fillStyle = '#008000';
ctx.fillRect(215, 600, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 3 (Hoenn)', 235, 610);
// Gen 4 (Sinnoh)
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(215, 625, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 4 (Sinnoh)', 235, 635);
// Gen 5 (Unova)
ctx.fillStyle = '#FFA500';
ctx.fillRect(400, 550, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 5 (Unova)', 420, 560);
// Gen 6 (Kalos)
ctx.fillStyle = '#800080';
ctx.fillRect(400, 575, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 6 (Kalos)', 420, 585);
// Gen 7 (Alola)
ctx.fillStyle = '#66CDAA';
ctx.fillRect(400, 600, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 7 (Alola)', 420, 610);
// Gen 8 (Galar)
ctx.fillStyle = '#A52A2A';
ctx.fillRect(400, 625, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Gen 8 (Galar)', 420, 635);

// systemtoplay key
ctx.strokeStyle = '#FFFFFF';
ctx.strokeRect(625, 500, 150, 150);
ctx.fillStyle = '#FFFF00';
ctx.font = '20px Arial';
ctx.fillText('System To Play', 633, 525);
ctx.moveTo(625, 535);
ctx.lineTo(775, 535);
ctx.stroke();
// PC
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(640, 550, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('PC', 660, 560);
// Playstation
ctx.fillStyle = '#0000FF';
ctx.fillRect(640, 575, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Playstation', 660, 585);
// Xbox
ctx.fillStyle = '#008000';
ctx.fillRect(640, 600, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Xbox', 660, 610);
// Nintendo Switch
ctx.fillStyle = '#FF0000';
ctx.fillRect(640, 625, 10, 10);
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('Nintendo Switch', 660, 635);

// elements BARS
let yDifference = 0;
let widthDifference = 0;
// Fire
yDifference = 400 - (fireCount * 10)
widthDifference = (fireCount * 10) - 1;
ctx.fillStyle = '#FF0000';
ctx.fillRect(120, yDifference, 25, widthDifference);
// Water
yDifference = 400 - (waterCount * 10)
widthDifference = (waterCount * 10) - 1;
ctx.fillStyle = '#0000FF';
ctx.fillRect(145, yDifference, 25, widthDifference);
// Earth
yDifference = 400 - (earthCount * 10)
widthDifference = (earthCount * 10) - 1;
ctx.fillStyle = '#008000';
ctx.fillRect(170, yDifference, 25, widthDifference);
// Wind
yDifference = 400 - (windCount * 10)
widthDifference = (windCount * 10) - 1;
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(195, yDifference, 25, widthDifference);
// pokemongen BARS
// gen1
yDifference = 400 - (gen1Count * 10)
widthDifference = (gen1Count * 10) - 1;
ctx.fillStyle = '#FF0000';
ctx.fillRect(260, yDifference, 25, widthDifference);
// gen2
yDifference = 400 - (gen2Count * 10)
widthDifference = (gen2Count * 10) - 1;
ctx.fillStyle = '#0000FF';
ctx.fillRect(285, yDifference, 25, widthDifference);
// gen3
yDifference = 400 - (gen3Count * 10)
widthDifference = (gen3Count * 10) - 1;
ctx.fillStyle = '#008000';
ctx.fillRect(310, yDifference, 25, widthDifference);
// gen4
yDifference = 400 - (gen4Count * 10)
widthDifference = (gen4Count * 10) - 1;
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(335, yDifference, 25, widthDifference);
// gen5
yDifference = 400 - (gen5Count * 10)
widthDifference = (gen5Count * 10) - 1;
ctx.fillStyle = '#FFA500';
ctx.fillRect(360, yDifference, 25, widthDifference);
// gen6
yDifference = 400 - (gen6Count * 10)
widthDifference = (gen6Count * 10) - 1;
ctx.fillStyle = '#800080';
ctx.fillRect(385, yDifference, 25, widthDifference);
// gen7
yDifference = 400 - (gen7Count * 10)
widthDifference = (gen7Count * 10) - 1;
ctx.fillStyle = '#66CDAA';
ctx.fillRect(410, yDifference, 25, widthDifference);
// gen8
yDifference = 400 - (gen8Count * 10)
widthDifference = (gen8Count * 10) - 1;
ctx.fillStyle = '#A52A2A';
ctx.fillRect(435, yDifference, 25, widthDifference);
// systemtoplay BARS
// PC
yDifference = 400 - (pcCount * 10)
widthDifference = (pcCount * 10) - 1;
ctx.fillStyle = '#DCDCDC';
ctx.fillRect(500, yDifference, 25, widthDifference);
// Playstation
yDifference = 400 - (playstationCount * 10)
widthDifference = (playstationCount * 10) - 1;
ctx.fillStyle = '#0000FF';
ctx.fillRect(525, yDifference, 25, widthDifference);
// Xbox
yDifference = 400 - (xboxCount * 10)
widthDifference = (xboxCount * 10) - 1;
ctx.fillStyle = '#008000';
ctx.fillRect(550, yDifference, 25, widthDifference);
// Switch
yDifference = 400 - (switchCount * 10)
widthDifference = (switchCount * 10) - 1;
ctx.fillStyle = '#FF0000';
ctx.fillRect(575, yDifference, 25, widthDifference);

// Bottom Graph Labels
// Elements
ctx.fillStyle = '#FFFF00'
ctx.font = '20px Arial';
ctx.fillText('Elements', 125, 430);
// Pokemon Generations
ctx.fillStyle = '#FFFF00';
ctx.font = '20px Arial';
ctx.fillText('Pokemon Generations',260, 430);
// Systems To Play
ctx.fillStyle = '#FFFF00';
ctx.font = '20px Arial';
ctx.fillText('System', 515, 430);

// Side Graph Labels
// 0
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('0', 85, 400);
// 5
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('5', 85, 350);
// 10
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('10', 80, 300);
// 15
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('15', 80, 250);
// 20
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('20', 80, 200);
// 25
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('25', 80, 150);
// 30
ctx.fillStyle = '#FFFFFF';
ctx.font = '15px Arial';
ctx.fillText('30', 80, 100);
    });