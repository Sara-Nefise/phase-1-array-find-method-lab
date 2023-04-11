// code your solution here
let arr=[
   { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(array){
let obj=array.find(element => element.result=='W')
return obj?obj.year:undefined;
}

console.log(superbowlWin(arr))