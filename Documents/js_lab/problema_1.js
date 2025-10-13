//Ordenar de menor a mayor

let list = [2,3,4,1,7,6];

function sort(list) {
    let copy_list = list.slice();
    return copy_list.sort();
}

console.log("Sorted list:");
console.log(sort(list));
console.log("Inital list:");
console.log(list);