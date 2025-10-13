const people = [
    {
    "name": "Pedro",
    "height": 1.78
    },
    {
    "name": "Ignacio",
    "height" : 1.70
    },
    {
     "name": "Max",
     "height": 1.92   
    },
    {
    "name": "Maria",
    "height": 1.61
    }
];

function tallerThan(array,than_height){
    copy_array = array.slice(); //Copy array
    copy_array = copy_array.filter(function (person) {
        return person.height > than_height; 
      });
    return copy_array
};
console.log("People: ");
console.log(people);
console.log("People taller than 1.75: ");
console.log(tallerThan(people,1.75));

console.log("\nPeople again: ");
console.log(people);
