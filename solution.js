function solve() {
  let CAMEL_CASE = 'Camel Case';
  let PASCAL_CASE = 'Pascal Case';
  let textInput = document.getElementById("text").value.toLowerCase();
  let currentText = document.getElementById("naming-convention").value;
 const result =  document.getElementById("result");

 if(currentText !== CAMEL_CASE && currentText !== PASCAL_CASE){
result.textContent = "Error"
  return;

 } 


 let arrOfStr = textInput.split(" ");
let outputPoint ="";
let startingPoint = 0;
if(currentText === CAMEL_CASE){
  outputPoint += arrOfStr[0]
  startingPoint = 1;
}


for(let i = startingPoint; i < arrOfStr.length; i++){
  outputPoint += arrOfStr[i][0].toUpperCase() + arrOfStr[i].slice(1, arrOfStr.length);


  result.textContent = outputPoint
}
}