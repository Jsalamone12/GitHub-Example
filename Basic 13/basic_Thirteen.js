function print1to255() {
  for (var i = 1; i < 256; i++) 
  console.log(i);
}
// print1to255();
function printIntAndSum0to255() {
  var sum = 0
  for (var i = 0; i < 256; i++) {
  console.log(i);
  sum += i;
  console.log("i=", i, "sum=", sum);

}
}
// printIntAndSum0to255(); 

function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    return arr[i];
  }
}
 // printArrayVals ([0, 3, 6, 1, 6])


function printMaxOfArray(arr) {
  var max = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
 //printMaxOfArray([99, 700, 47, 6, 8])


function printAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    var avg = sum / arr.length;
  }
  console.log(avg);
}
// printAverageOfArray([0, 3, 60, 1, 6])

function printOdds1To255() {
  for (var i = 1; i < 256; i++)
    if (i % 2 !== 0) {
      console.log(i); 
    }
}
//  printOdds1To255()

function returnOddsArray1To255(){
  var arr = [];
  for (var i = 0; i < 256; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}
// returnOddsArray1To255()
function squareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
   console.log(arr);
    return arr;
}
// squareArrayVals([5, 6, 8])

function printArrayCountGreaterThanY(arr,Y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count = count + 1;
    }
  }
  console.log(count);

}
 printArrayCountGreaterThanY([2, 5, 20, 70, 9, 30], 10)

function zeroOutArrayNegativeVals(arr) {
  // var arr = [0, 3, 6, 1, -1, -2, 6];
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}
  // zeroOutArrayNegativeVals([10, -20, -50, 3, -6, 9]) 
function printMaxMinAverageArrayVals(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
 
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
}
var avg = sum / arr.length;
arrnew = [max, min, avg];
console.log(arrnew);
}
// printMaxMinAverageArrayVals([5, 30, 4, 1, 80, 2])

// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// loop through temp arr and push values into temp arr 
// use an if state ment to compare 
//if arr[0] !== 0 
// i = 0 
//if i == 0 { arr[i = 0]
function shiftArrayValsLeft(arr) {
 var temp = [];
  for(var i = 0; i < arr.length;i++){
    // if(i == 0){
    //   arr[i] = 0; 
    // } 
    if(i !=0){
         temp.push(arr[i]);
      }
  }
  temp.push(0);
  console.log(temp);
}
 shiftArrayValsLeft([60, 6, 5, 3, 90])  

function swapStringForArrayNegativeVals(arr) {

  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
}
// swapStringForArrayNegativeVals([10, 20, -50, 3, -6, 9])