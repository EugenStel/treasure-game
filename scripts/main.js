const hint = document.getElementById('hint');
const map = document.querySelector('[alt="map"]');


// function getDistanceToTreasure (clickCoords, treasureCoords) { // {} {}
function getDistanceToTreasure ({x: cX, y: cY}, {x: tX, y: tY}) { // дестуктуризация
    //return Math.sqrt( Math.pow((clickCoords.x - treasureCoords.x), 2) + Math.pow((clickCoords.y - treasureCoords.y), 2) )
    return Math.sqrt( (cX - tX)**2 + (cY - tY)**2);
};

// console.log(getDistanceToTreasure( {x:2, y:9}, {x:8, y:10} ));