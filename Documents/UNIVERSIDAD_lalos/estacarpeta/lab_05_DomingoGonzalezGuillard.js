
let list = ["palabra" , "tarea", "lista","youtube","stackoverflow"]

//function reverseString(strin)

// function reverseString(arr) {
//     var nuevaLista = [];


//     for (var i = arr.length - 1; i >= 0; i--) {
//       nuevaLista.push(arr[i]);
//     }
//     return nuevaLista;
//   }

function reverseString(list){
    //Creamos lista nueva
    var newList = []
    //mapeamos la lista de strings
    list.map((x) =>{
        // sobre escribimos
        newList.unshift(x);
    })
    return newList;


}
console.log(reverseString(list)); 

// removeDuplicates(strin){

// }

function removeDuplicates(string) {
    //Convertimos el string en una lista de chars 
    // luego filtramos por char y 
    return string.split('').filter(function(char, index, self) {
        return self.indexOf(char) == index;}).join('');
  }

  console.log(removeDuplicates("hoooolaaaaCooomoEsttoy"));

  console.log(removeDuplicates("hoola"));