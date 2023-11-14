function phanTu(arr) {

    let counter = {};
    
    arr.forEach(function(element) {
        if (counter[element] === undefined) {
            counter[element] = 1;
        } else {
            counter[element]++;
        }
    });

    let maxElement = null;
    let maxCount = 0;

    for (let key in counter) {
        if (counter[key] > maxCount) {
            maxElement = key;
            maxCount = counter[key];
        }
    }

    let result = {
        value: parseInt(maxElement),
        count: maxCount
    };

    return result;
}

let inputArray = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let output = phanTu(inputArray);

console.log(output);
