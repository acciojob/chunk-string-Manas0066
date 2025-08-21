
function stringChop(str, size) {
    // your code here
      const arr = [];
  
      for(let i =0;i<str.length;i+=size){
          let s = str.slice(i,i+size);
          arr.push(s);
      }
      console.log(arr);
  }

stringChop(str,3);  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
