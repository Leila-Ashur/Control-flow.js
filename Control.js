// function that accepts an array of strings and console.logs each element using a for loop.
function school(arr){

for(let s=0; s < arr.length;s++){
  
    console.log(arr[s]);
}
}
let arr=["Union","Kidiwa","Delany"];
school(arr)
// function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
array=[3,5,6]
function numbers(array){
    array.forEach(e => {
        
        console.log(e*2);
    });
}
numbers(array)

//  function that takes in an array of numbers and consoles the first four items multiplied 
// by 8 and the last two added by 5. Console the array with the new values
let newarr = []

function num(array) {

    
    for (let n = 0; n < array.length; n++) {
       
        
    
    if(n===3){
        break;
    }

newarr.push(array[n]*8)
}   

for(let n=array.length-2; n<=array.length-1;n++){
    // console.log(array[n]+5)
    if(n===array.length-2){

    }
   newarr.push(array[n]+5) 
}
console.log(newarr)
}
num(array)

// Write a function that takes in the following array and use a while loop to iterate 
// /and break when the item is equal to the fourth index
 let arrNum = [1,2,3,4,5,6,7,8,9];
function iterate(arr) {
    let i =0
    while(i< arr.length){
        if(i === 4){
            break
        }
        console.log(arr[i]);
        i++
    }
    
}

 
    
function iterateUntilFourthIndex(arr) {
    let i = 0;
    while (i < arr.length) {
      if (i === 4) {
        break;
      }
      console.log(arr[i]);
      i++;
    }
  }
 iterate(arrNum)

//  Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function Continue(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 2) {
        continue;
      }
      console.log(arr[i]);
    }
  }
  let fruits= ['apple','plum','banana','strawberries','kiwi'];
Continue(fruits);

