
function stringChop(str, size) {
    // your code here
	  if(!str)return [];
	  if(!size || size<=0)return [str];
      const arr = [];
  
      for(let i =0;i<str.length;i+=size){
          let s = str.slice(i,i+size);
          arr.push(s);
      }
      return arr;
  }
  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
