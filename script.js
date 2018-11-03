const fs = require('fs');

//     console.time('santaFunc');
//     console.timeEnd('santaFunc');

let readable = fs.createReadStream("./input.txt", {
    encoding: 'utf8',
    fd: null,
});
readable.on('readable', function() {
    // console.time('santaFunc');
    let floor = 0;
    let chunk;
    while (null !== (chunk = readable.read(1))) {
        if(chunk === '('){
            // console.log('Up', chunk);
            floor = floor + 1; 
        } else if(chunk === ')'){
            floor = floor - 1; 
            // console.log('Down', chunk);
        }
    }
    console.log(floor.toString())
    // console.timeEnd('santaFunc');
});