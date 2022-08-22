const array = [1, 2, 3, 4, 5, 6];
console.log(sum(array));

function sum(array) {
    if (array.length == 1)
        return array[0];
    else
        return array.pop() + sum(array);
}
