const fs = require('fs');
const { resourceUsage } = require('process');

function fibonacci(num) {
  var res;
  if(num == 0 ) {
      return 0;
  } else if (num == 1 || num ==2){
      return 1;
  } else {
      return res = fibonacci(num-1) + fibonacci(num-2);
  }
}
fs.readFile('NODE\\number.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  var num = parseInt(data);
  console.log("Fibacci number of %d is: %d",num,fibonacci(num))

});


