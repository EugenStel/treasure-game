const hint = document.getElementById('hint');

const map = document.querySelector('[alt="map"]');


// function getDistanceToTreasure (clickCoords, treasureCoords) { // {} {}
function getDistanceToTreasure ({x: cX, y: cY}, {x: tX, y: tY}) { // дестуктуризация
    //return Math.sqrt( Math.pow((clickCoords.x - treasureCoords.x), 2) + Math.pow((clickCoords.y - treasureCoords.y), 2) )
    return Math.sqrt( (cX - tX)**2 + (cY - tY)**2);
};

// console.log(getDistanceToTreasure( {x:2, y:9}, {x:8, y:10} ));

const trasureMap = document.querySelector('[alt="map"]');


//function hideTreasure (map, gap) {
    // console.dir(map);
    // map.height;
    // map.width;
    //return {
        //x: Math.floor(Math.random() * (map.width - (gap * 2))) + gap,
       // y: Math.floor(Math.random() * (map.height - (gap * 2))) + gap
   // }
//}


const generateRandomNumber = (size, gap) => Math.floor(Math.random() * (size - (gap * 2))) + gap;

const generateTreasureCoords = ({width, height}, gap) => ({
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(height,gap)
})


//console.log(generateTreasureCoords(trasureMap, 50));

