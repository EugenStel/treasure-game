import {getDistanceToTreasure} from './utils/getDistanceToTreasure.js';
import {generateTreasureCoords} from './utils/generateTreasureCoords.js';

const hint = document.getElementById('hint');
const trasureMap = document.querySelector('[alt="map"]');

console.log(getDistanceToTreasure( {x: 2, y: 10}, {x: 3, y: 8} ));
console.log(generateTreasureCoords({width:500, height: 500}, 20));