const removeFromArray = function(arr, ...theArgs) {


    theArgs.forEach(value => {
        while (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1);
        }
    });
    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;
