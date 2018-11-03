const fs = require('fs');

//1- What floor does santa end up on

//using array reduce function 
function firstQuestion(){
    fs.readFile('./input.txt', (err, data) =>{
        console.time('santaFunc');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) =>{
            if(currentValue === '('){
                return acc += 1;
            } else if(currentValue === ')'){
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santaFunc');
        console.log('floor:', answer);

    })
}

firstQuestion();

//------Using old fashion checkig--------///
// input.on('readable', function() {
//     // console.time('santaFunc');
//     let floor = 0;
//     let character;
//     while (null !== (character = input.read(1))) {
//         if(character === '('){
//             // console.log('Up', character);
//             floor = floor + 1; 
//         } else if(character === ')'){
//             floor = floor - 1; 
//             // console.log('Down', character);
//         }
//     }
//     console.log(floor.toString())
//     // console.timeEnd('santaFunc');
// });


//2- When does Santa first enter the basement

function secondQuestion(){
    fs.readFile('./input.txt', (err, data) =>{
        console.time('santaFunc');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) =>{
            if(currentItem === '('){
                accumulator += 1;
            } else if(currentItem === ')'){
                accumulator -= 1;
            }
            counter ++
            return accumulator < 0;
        })
        console.timeEnd('santaFunc');
        console.log('basment entered at:', counter);

    })
}

secondQuestion();
