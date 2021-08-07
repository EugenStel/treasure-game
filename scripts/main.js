const hint = document.getElementById('hint');
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